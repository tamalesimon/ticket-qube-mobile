import { useState } from 'react';

const useFormValidation = () => {
    const [{ email, password }, setFormData] = useState({ email: '', password: '' })
    const [formErrors, setFormErrors] = useState({ emailError: '', passwordError: '' })

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (email.trim() === '') {
            isValid = false;
            errors.emailError = 'Email is required';
        }

        if (password.trim() === '') {
            isValid = false;
            errors.passwordError = 'Password is required';
        }
        setFormErrors(errors)
        return isValid;
    }

    const handleSignin = () => {
        const data = { email, password }
        const isValid = validateForm();
    return { isValid, data }
    }

    return { email, password, formErrors, handleSignin, setFormData }
}