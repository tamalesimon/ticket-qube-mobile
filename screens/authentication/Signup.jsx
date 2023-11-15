import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, ICONS } from '../../constants';
import { createAccount } from "../../redux/authSlice";
import { useFormValidation } from "../../hooks/useFormValidation";

import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";
import AcceptTerms from "../../components/terms/AcceptTerms";
import LoadingIndicator from "../../components/loaders/LoadingIndicator";

import globalStyles from '../../styles/globalStyles';


const Signup = ({ navigation }) => {

    const dispatch = useDispatch();
    const { isLoading, error, isSignedUp, isCreated } = useSelector(state => state.auth);
    const [nameInput, setNameInput] = useState('');
    const initialFormData = { firstName: '', lastName: '', email: '', password: '', phoneNumber: '256779813251', dateOfBirth: '1993-04-17T00:00:00', userRole: 'CLIENT', country: 'UGANDA', timezone: 'AFRICA_KAMPALA' }
    const { formData, formErrors, handleSubmit, setFormData } = useFormValidation(initialFormData);
    const { firstName, lastName, email, password, phoneNumber, dateOfBirth, userRole } = formData;


    const handleNavigation = () => {
        if (isCreated) {
            navigation.navigate({
                name: 'Verify',
                params: { email: isSignedUp.email, password: password }
            })
        }
    }

    useEffect(() => {
        handleNavigation();
        navigation.setOptions({
            // headerShown: !isLoading
            headerStyle: {
                backgroundColor: isLoading ? '#7F7F7F' : 'white'
            }
        });
    }, [isCreated, isLoading])

    const handleSignup = () => {
        const { isValid, data } = handleSubmit()
        if (isValid) {
            dispatch(createAccount(data));
        }
        console.log('form Data', data)
    }

    const handleInputText = (text) => {
        setNameInput(text)
        const names = text.split(' ');
        let firstName;
        let lastName;
        if (names.length >= 2 && names.length <= 4) {
            firstName = names.slice(0, -1).join(' ');
            lastName = names.slice(-1)[0];
        } else if (names.length > 4) {
            firstName = names.slice(0, 2).join(' ');
            lastName = names.slice(-1)[0];
        } else {
            firstName = text;
            lastName = '';
        }
        setFormData(prevState => ({ ...prevState, firstName, lastName }));
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 23 }}>
            <View>
                <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <Text style={{ ...globalStyles.Heading4, textAlign: 'left' }}>Create an account</Text>
                        <View>
                            <Text style={styles.subComment}>Enter your Name, Email and Password to sign up.</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                                <Text style={styles.alreadyAcount}>Already have an account?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 16, marginTop: 24, }}>
                        <InputField
                            placeholder="Your name"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.UserIcon}
                            inputType={'names'}
                            value={nameInput}
                            onChangeText={handleInputText}
                            setFormData={setFormData}
                            error={!!(formErrors.firstNameError && formErrors.lastNameError)}
                        />
                        <InputField
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.MailIcon}
                            inputType={'email'}
                            value={email}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, email: text }))}
                            setFormData={setFormData}
                            error={formErrors.emailError}
                        />
                        <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.LockIcon}
                            inputType={'password'}
                            value={password}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, password: text }))}
                            setFormData={setFormData}
                            error={formErrors.passwordError}
                        />
                        <View style={{ marginTop: 24 }}>
                            <View style={{ gap: 12 }}>
                                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign Up"} onPress={handleSignup} />
                                <Text style={{ fontFamily: FONTS.NotoSansJPRegular, color: COLORS.gray400, fontWeight: 400, fontSize: FONTSIZE.medium, textAlign: "center", marginHorizontal: 24 }}>Or</Text>
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign Up with Google"} icon={ICONS.GoogleIcon} />
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign Up with Apple"} icon={ICONS.AppleIcon} />
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <AcceptTerms />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {
                isLoading && (
                    <View style={styles.loader}>
                        <LoadingIndicator />
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.gray400,
        lineHeight: 24
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500,
        fontSize: 14,
        color: COLORS.primaryBase,
        lineHeight: 24
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})