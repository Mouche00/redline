<?php

namespace App\Http\Requests;

use App\Traits\ResponseTrait;
use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
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
            'message' => 'string|min:1|max:255',
            'channel' => 'exists:channels,id'
        ];

        return $this->addRequired($rules);
    }
}
