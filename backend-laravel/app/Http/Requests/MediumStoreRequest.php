<?php

namespace App\Http\Requests;

use App\Traits\ResponseTrait;
use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class MediumStoreRequest extends FormRequest
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
        return [
            'title' => 'required|string|max:255|unique:media,title',
            'description' => 'required|string|min:2|max:255',
            'genre' => 'required|string|min:2|max:255',
            'date' => 'required|date',
            'studio' => 'required|string|max:255',
            'category' => 'required|string|exists:categories,name',
            'additional_info' => 'array',
            'people' => 'array',
        ];
    }
}
