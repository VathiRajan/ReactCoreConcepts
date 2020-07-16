import { useState } from 'react';
export const useForm = (initialValues) => {

    const [value, setValue] = useState(initialValues)

    return [
        value,
        e => {
            setValue(
                {
                    ...value,
                    [e.target.name]: e.target.value
                }
            )
        }
    ]


}