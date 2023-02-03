<?php

namespace App\Http\Controllers\Student;

use App\Models\Student;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //validate the form data
        $this->validate($request, [
            'nis'      => 'required',
            'password'  => 'required',
        ]);

        //cek nis dan password
        $student = Student::where([
            'nis'      => $request->nis,
            'password'  => $request->password
        ])->first();

        if (!$student) {
            return redirect()->back()->with('error', 'NIS atau Password salah');
        }

        //login the user
        auth()->guard('student')->login($student);

        //redirect to dashboard
        return redirect()->route('student.dashboard');
    }
}
