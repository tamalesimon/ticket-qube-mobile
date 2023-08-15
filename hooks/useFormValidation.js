import { useState } from 'react';

export const useFormValidation = () => {
    const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber: '',
    confirmPassword:'',
    dateOfBirth: '1987-01-10T00:00:00.00Z',
    userRole: "CLIENT" });
    const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
    firstNameError:'',
    lastNameError:'',
    phoneNumberError:'',
    dateOfBirthError:'',
    userRoleError:'',
    confirmPasswordError:''
    });

    const validateForm = () => {
        const {email, password, firstName, lastName, confirmPassword } = formData;
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
        if (firstName.trim() === '') {
            isValid = false;
            errors.passwordError = 'Password is required';
        }
        if (lastName.trim() === '') {
            isValid = false;
            errors.passwordError = 'Password is required';
        }
        if (password !== confirmPassword) {
            isValid = false;
            errors.passwordError = 'Password need to match';
        }
        setFormErrors(errors)
        return isValid;
    }

    const handleSubmit = (data) => {
        const isValid = validateForm();
        return { isValid, data }
    }

    return { formData, formErrors, handleSubmit, setFormData }
}