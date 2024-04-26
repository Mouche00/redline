<?php

namespace App\Http\Requests;

use App\Traits\ResponseTrait;
use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class MediumRequest extends FormRequest
{
    use ResponseTrait, ValidationTrait;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'string|max:255|unique:media,title',
            'description' => 'string|min:2|max:255',
            'genre' => 'string|min:2|max:255',
            'date' => 'date',
            'studio' => 'string|max:255',
            'category' => 'string|exists:categories,name',
            'misc' => 'array',
            'crew' => 'array',
        ];

        $exceptions = ['studio', 'misc', 'crew'];

        return $this->addRequired($rules, $exceptions);
    }
}
