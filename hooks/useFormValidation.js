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
        const { email, password, firstName, lastName, confirmPassword, phoneNumber, dateOfBirth, otp, country, timeZone, userRole } = formData;
        let isValid = true;
        const errors = {};

        // Add validation rules for email and password
        if (email?.trim() === '') {
            isValid = false;
            errors.emailError = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            errors.emailError = 'Email is invalid';
        }
        if (password?.trim() === '') {
            isValid = false;
            errors.passwordError = 'Password is required';
        } else if (password?.length < 8 || password?.length > 24) {
            isValid = false;
            errors.passwordError = 'Password must be between 8 and 24 characters';
        }

        // Add validation rules for firstName and lastName
        if (firstName?.trim() === '') {
            isValid = false;
            errors.firstNameError = 'First name is required';
        }
        if (lastName?.trim() === '') {
            isValid = false;
            errors.lastNameError = 'Last name is required';
        }

        // Add validation rule for confirmPassword
        if (confirmPassword?.trim() === '') {
            isValid = false;
            errors.confirmPasswordError = 'Confirm password is required';
        }

        // Add validation rule for phoneNumber
        if (phoneNumber?.trim() === '') {
            isValid = false;
            errors.phoneNumberError = 'Phone number is required';
        }

        // Add validation rule for dateOfBirth
        if (dateOfBirth?.trim() === '') {
            isValid = false;
            errors.dateOfBirthError = 'Date of birth is required';
        }

        // Add OTP validation logic
        if (otp?.some((digit) => isNaN(digit))) {
            isValid = false;
            errors.otpError = 'OTP is invalid';
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