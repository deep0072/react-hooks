import { useState } from "react"

export const useForm = (initialValues)=>{

    

    const [values,setValues] = useState(initialValues);

    return [values, e=>{

        // it will take those arguments and update the input fied with the arguments
        setValues({
            ...values,
            [e.target.name] : e.target.name}
        )
    }]

}