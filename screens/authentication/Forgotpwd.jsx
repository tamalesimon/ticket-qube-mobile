import React, { useEffect } from "react"
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, ICONS } from '../../constants';
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/authSlice";
import LoadingIndicator from "../../components/loaders/LoadingIndicator";
import { useFormValidation } from "../../hooks/useFormValidation";
import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";
import globalStyles from '../../styles/globalStyles';
import forgotPasswordImage from '../../assets/images/forgot-password.png';


const ForgotPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, status, isExisting } = useSelector(state => state.auth)
    const initialFormData = { email: '' };
    const { formData, formErrors, setFormData, handleSubmit } = useFormValidation(initialFormData);

    const handleNavigation = () => {
        if (isLoading) {
            navigation.navigate('Verify', { screen: 'ResetPassword' });
        }
    }

    useEffect(() => {
        handleNavigation();
        navigation.setOptions({
            headerShown: !isLoading
        });
    }, [isLoading, isExisting])

    const handlePasswordReset = () => {
        const { isValid, data } = handleSubmit();
        if (isValid) {
            dispatch(forgotPassword(data))
        } else {
            console.log(formErrors)
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View>
                <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 32 }}>
                        <Image source={forgotPasswordImage} resizeMode='contain' />
                        <Text style={{ ...globalStyles.Heading4, marginBottom: 8 }}>Forgot Password</Text>
                        <Text style={styles.message} >Please enter the email address associated with your account.</Text>
                    </View>
                    <View style={{ marginBottom: 217, marginTop: 32, alignItems: 'center' }}>
                        <InputField
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.MailIcon}
                            inputType={'email'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, email: text }))}
                            setFormData={setFormData}
                            value={formData.email}
                            error={formErrors.emailError}
                        />
                    </View>
                    <GenericButton bgColor={"primaryBase"} label={"Reset Password"} fontColor={"white"} onPress={handlePasswordReset} />
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