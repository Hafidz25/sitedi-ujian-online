<?php

namespace App\Imports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class StudentsImport implements ToModel, WithHeadingRow, WithValidation
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Student([
            'nis'          => (int) $row['nis'],
            'name'          => $row['name'],
            'password'      => $row['password'],
            'gender'        => $row['gender'],
            'classroom_id'  => (int) $row['classroom_id'],
        ]);
    }

    public function rules(): array
    {
        return [
            'nis' => 'unique:students,nis',
            'classroom_id' => 'required|exists:classrooms,id'
        ];
    }
}
