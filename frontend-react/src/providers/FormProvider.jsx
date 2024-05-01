import { createContext, useState } from "react"
import Form from "src/components/elements/form/Form"

export const FormContext = createContext()

const FormProvider = ({ children, setFormData, onSubmit, className }) => {
    const [setData, ] = useState(() => setFormData)

    return (
        <FormContext.Provider value={setData}>
            <Form onSubmit={onSubmit} className={className}>
                {children}
            </Form>
        </FormContext.Provider>
    )
}

export default FormProvider