import React, { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, ICONS } from '../../constants';
import { maskEmail } from "../../utils/utils";
import GenericButton from "../../components/buttons/genericButton";
import globalStyles from '../../styles/globalStyles';
import OtpInput from "../../components/inputField/OtpInput";
import { useSelector, useDispatch } from "react-redux";
import { verifyOtp } from "../../redux/authSlice";
import LoadingIndicator from "../../components/loaders/LoadingIndicator";
import { useFormValidation } from "../../hooks/useFormValidation";

import verifyImage from '../../assets/images/verify.png';



const Verify = ({ navigation, route: { params: { screen } } }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const { isLoading, error, isVerified, isExisting, status } = useSelector(state => state.auth)
    const { formData, formErrors, handleSubmit, setFormData } = useFormValidation(initialFormData = { otp: ['', '', '', '', ''] })
    const { otp } = formData
    const dispatch = useDispatch();


    const handleNavigation = () => {
        if (status) {
            navigation.navigate(screen);
        }
    }

    useEffect(() => {
        handleNavigation();
        navigation.setOptions({
            headerShown: !isLoading
        });
    }, [isLoading, isExisting, isVerified])

    const handleVerification = () => {
        const { isValid } = handleSubmit();
        if (isValid) {
            const otpToString = otp.join('');
            const data = { otp: otpToString }
            dispatch(verifyOtp(data))
        } else {
            const otpError = formErrors.otp;
            if (otpError) {
                setErrorMessage(otpError)
                console.log(errorMessage)
            } else (error)
        }

    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 24 }}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
                <Image source={verifyImage} resizeMode='contain' />
                <View style={{ flexDirection: 'column', alignItems: 'center', width: "100%" }} >
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
                        <Text style={{ ...globalStyles.Heading4, fontWeight: 700, marginBottom: 8 }}>Verification Code</Text>
                        <Text style={styles.message}>We have sent the verification code to your email</Text>
                        {/* <Text style={styles.messageEmail}>{maskEmail(email)}.</Text> */}
                    </View>
                    <View style={styles.inputContainer}>
                        {otp.map((digit, index) => (
                            <OtpInput
                                key={`otp-${index}`}
                                value={digit}
                                onChangeText={(text) => {
                                    setFormData({ ...formData, otp: [...otp.map((d, i) => i === index ? text : d)] })
                                }}
                                index={index}
                            />
                        ))}
                    </View>
                    <TouchableOpacity style={{ marginBottom: 180 }}>
                        <Text style={styles.resendCode}>Resend code</Text>
                    </TouchableOpacity>
                    <View style={{ width: "100%" }}>
                        <GenericButton bgColor={"primaryBase"} label={"Verify"} fontColor={"white"} onPress={handleVerification} />
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

export default Verify

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 32,
        marginBottom: 24
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
        color: COLORS.gray400
    },
    messageEmail: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: 14,
        color: COLORS.secondaryBase
    },
    indicator: {
        padding: 12,
        backgroundColor: COLORS.gray200,
        borderRadius: 12
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