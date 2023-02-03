<?php

namespace App\Http\Controllers\Admin;

use App\Models\Student;
use App\Models\Classroom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Imports\StudentsImport;
use Maatwebsite\Excel\Facades\Excel;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get students
        $students = Student::when(request()->q, function ($students) {
            $students = $students->where('name', 'like', '%' . request()->q . '%');
        })->with('classroom')->latest()->paginate(5);

        //append query string to pagination links
        $students->appends(['q' => request()->q]);

        //render with inertia
        return inertia('Admin/Students/Index', [
            'students' => $students,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get classrooms
        $classrooms = Classroom::all();

        //render with inertia
        return inertia('Admin/Students/Create', [
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validate request
        $request->validate([
            'name'          => 'required|string|max:255',
            'nis'          => 'required|unique:students',
            'gender'        => 'required|string',
            'password'      => 'required|confirmed',
            'classroom_id'  => 'required'
        ]);

        //create student
        Student::create([
            'name'          => $request->name,
            'nis'          => $request->nis,
            'gender'        => $request->gender,
            'password'      => $request->password,
            'classroom_id'  => $request->classroom_id
        ]);

        //redirect
        return redirect()->route('admin.students.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //get student
        $student = Student::findOrFail($id);

        //get classrooms
        $classrooms = Classroom::all();

        //render with inertia
        return inertia('Admin/Students/Edit', [
            'student' => $student,
            'classrooms' => $classrooms,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student)
    {
        //validate request
        $request->validate([
            'name'          => 'required|string|max:255',
            'nis'          => 'required|unique:students,nis,' . $student->id,
            'gender'        => 'required|string',
            'classroom_id'  => 'required',
            'password'      => 'confirmed'
        ]);

        //check password
        if ($request->password == "") {

            //update student without password
            $student->update([
                'name'          => $request->name,
                'nis'          => $request->nis,
                'gender'        => $request->gender,
                'classroom_id'  => $request->classroom_id
            ]);
        } else {

            //update student with password
            $student->update([
                'name'          => $request->name,
                'nis'          => $request->nis,
                'gender'        => $request->gender,
                'password'      => $request->password,
                'classroom_id'  => $request->classroom_id
            ]);
        }

        //redirect
        return redirect()->route('admin.students.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //get student
        $student = Student::findOrFail($id);

        //delete student
        $student->delete();

        //redirect
        return redirect()->route('admin.students.index');
    }

    public function import()
    {
        return inertia('Admin/Students/Import');
    }

    public function storeImport(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|mimes:csv,xls,xlsx'
        ]);

        // import data
        Excel::import(new StudentsImport(), $request->file('file'));

        //redirect
        return redirect()->route('admin.students.index');
    }
}
