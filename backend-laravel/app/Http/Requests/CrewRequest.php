<?php

namespace App\Http\Requests;

use App\Traits\ResponseTrait;
use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class CrewRequest extends FormRequest
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
            'name' => 'string|min:1|max:255',
            'image' => 'image|mimes:jpg,png,jpeg,gif,svg,webp',
            'function' => 'string|min:2|max:255',
        ];

        return $this->addRequired($rules);
    }
}
