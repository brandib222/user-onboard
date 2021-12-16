import * as yup from 'yup';

const formSchema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name has to be at least 3 characters!'),
    email:yup
        .string()
        .trim()
        .required('email is required'),
    password:yup
        .string()
        .trim()
        .required('password is required')
        .min(5, 'password must be at least 5 characters'),
    terms:yup.boolean(),
})

export default formSchema;