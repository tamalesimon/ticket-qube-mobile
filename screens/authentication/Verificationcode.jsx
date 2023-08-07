import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import { maskEmail } from "../../utils/utils";
import GenericButton from "../../components/buttons/genericButton";
import globalStyles from '../../styles/globalStyles';
import OtpInput from "../../components/inputField/OtpInput";
import { useSelector, useDispatch } from "react-redux";
import { verifyOtp } from "../../redux/authSlice";
import LoadingIndicator from "../../components/loaders/LoadingIndicator";



const Verify = ({ route: { params: { email } }, navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '', ''])
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading)
    const error = useSelector((state) => state.auth.error)
    const userinfo = useSelector((state) => state.auth.userInfo.userId)


    const handleVerification = () => {

        // const userId = userinfo.userId
        const otpToString = otp.join('');
        const data = {
            otp: otpToString
        }
        if (error) {
            setErrorMessage(error.message)
        } else {
            dispatch(verifyOtp(data))
            navigation.navigate('Signin')
        }

    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, paddingHorizontal: 24 }}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
                <Image source={require('../../assets/images/verify.png')} resizeMode='contain' />
                {
                    isLoading
                        ? <LoadingIndicator />
                        :
                        <View style={{ flexDirection: 'column', alignItems: 'center', width: "100%" }} >
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
                                <Text style={{ ...globalStyles.Heading4, fontWeight: 700, marginBottom: 8 }}>Verification Code</Text>
                                <Text style={styles.message}>We have sent the verification code to your email</Text>
                                <Text style={styles.messageEmail}>{maskEmail(email)}.</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                {otp.map((digit, index) => (
                                    <OtpInput
                                        key={index}
                                        value={digit}
                                        onChangeText={(text) => {
                                            setOtp([...otp.map((d, i) => i === index ? text : d)])
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
                }
            </View>
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
})