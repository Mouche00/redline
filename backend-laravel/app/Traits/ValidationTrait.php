<?php

namespace App\Traits;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

trait ValidationTrait
{
    use ResponseTrait;
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            $this->responseError($validator->errors(), "Validation error", 422)
        );
    }

    public function addRequired(array $rules)
    {
        if($this->getMethod() == 'POST'){
            $rules = array_map(fn($rule) => 'required|' . $rule, $rules);
            // array_walk($rules, fn(&$value, $key) => $value = 'required|' . $value);
        }

        return $rules;
    }
}
