import React, { useState } from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, icons } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/authSlice";

import { useFormValidation } from "../../hooks/useFormValidation";
import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";
import globalStyles from '../../styles/globalStyles';


const ForgotPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.auth)
    const { formData, formErrors, setFormData, handleSubmit } = useFormValidation();
    const { email } = formData;

    const handlePasswordReset = () => {
        const data = { email }
        const submission = handleSubmit(data);
        if (submission.isValid) {
            dispatch(forgotPassword(data))
            if (!error) {
                navigation.navigate('ResetPassword')
            } else {
                console.log(error)
            }
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View>
                <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
                        <Image source={require('../../assets/images/forgot-password.png')} resizeMode='contain' />
                        <Text style={{ ...globalStyles.Heading4, marginBottom: 8 }}>Forgot Password</Text>
                        <Text style={styles.message} >Please enter the email address associated with your account.</Text>
                    </View>
                    <View style={{ marginBottom: 217, marginTop: 32, alignItems: 'center' }}>
                        <InputField
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.MailIcon}
                            inputType={'email'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, email: text }))}
                            setFormData={setFormData}
                            value={email}
                            error={formErrors.emailError}
                        />
                    </View>
                    <GenericButton bgColor={"primaryBase"} label={"Reset Password"} fontColor={"white"} onPress={handlePasswordReset} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    inputText: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: FONTSIZE.medium,
        color: COLORS.grayBase
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 32,
        marginBottom: 224
    },
    inputBox: {
        borderRadius: 16,
        width: 56,
        height: 56,
        backgroundColor: COLORS.gray50,
        marginRight: 11.75
    },
    inputText: {
        paddingHorizontal: 21,
        paddingVertical: 10,
        textAlign: 'center',
        // borderColor:COLORS.primaryBase,
        borderRadius: 16,
        // borderWidth: 1,
    },
    inputFocus: {
        borderColor: COLORS.primaryBase,
    },
    resendCode: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: 14,
        color: COLORS.primaryBase,
    },
    message: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.gray400,
        width: 290,
        textAlign: "center",
    },
    messageEmail: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: 14,
        color: COLORS.secondaryBase
    }
})