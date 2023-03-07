<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'img',
        'question',
        'option_1',
        'option_2',
        'option_3',
        'option_4',
        'option_5',
        'answer',
    ];

    // protected function img(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('uploads/' . $value),
    //     );
    // }

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
