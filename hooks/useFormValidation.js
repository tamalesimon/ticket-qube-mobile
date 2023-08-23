import { useState } from 'react';

export const useFormValidation = (initialFormData) => {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({
        emailError: '',
        passwordError: '',
        firstNameError: '',
        lastNameError: '',
        phoneNumberError: '',
        dateOfBirthError: '',
        userRoleError: '',
        confirmPasswordError: '',
        otp: ['', '', '', '', '']
    });

    const validateForm = () => {
        const { email, password, firstName, lastName, confirmPassword, otp } = formData;
        let isValid = true;
        const errors = {};

        if (email?.trim() === '') {
            isValid = false;
            errors.emailError = 'Email is required';
        }
        if (password?.trim() === '') {
            isValid = false;
            errors.passwordError = 'Password is required';
        }
        setFormErrors(errors)
        return isValid;
    }

    const handleSubmit = () => {
        const isValid = validateForm();
        return { isValid, data: formData }
    }

    return { formData, formErrors, handleSubmit, setFormData }
}