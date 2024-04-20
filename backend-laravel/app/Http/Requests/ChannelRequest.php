<?php

namespace App\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class ChannelRequest extends FormRequest
{
    use ValidationTrait;
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
            'reciever' => 'exists:users,id',
        ];

        return $this->addRequired($rules);
    }

    public function withValidator(Validator $validator): void
    {
        $recieverIsUser = auth()->user()->id == $validator->getData()['reciever'];
        $validator->after(function(Validator $validator) use ($recieverIsUser) {
            if($recieverIsUser) {
                $validator->errors()->add('reciever', 'Reciever cannot be the same as the current user');
            }
        });
    }
}
