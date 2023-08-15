import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";
import AcceptTerms from "../../components/terms/AcceptTerms";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";
import globalStyles from '../../styles/globalStyles';
import InputField from "../../components/inputField/InputField";
import { useFormValidation } from '../../hooks/useFormValidation.js';
import Display from '../../utils/Display'


const Signin = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, error, verified } = useSelector((state) => state.auth)
    const { formData, formErrors, setFormData, handleSubmit } = useFormValidation();
    const { email, password } = formData;


    const handleSignin = () => {
        const data = { email, password }
        const submission = handleSubmit(data);
        if (submission.isValid) {
            dispatch(signin(data))
            navigation.navigate(verified === true ? 'Home' : 'PickInterest');
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View>
                <View style={{ flexDirection: 'column', marginTop: 32 }}>
                    <View style={{}}>
                        <Text style={globalStyles.Heading4}>Hello once Again!</Text>
                        <Text style={{ fontSize: FONTSIZE.medium, color: COLORS.gray400, fontFamily: FONTS.NotoSansJPRegular, fontWeight: 400, width: Display.setWidth(261), }}>Welcome back, you've been missed</Text>
                    </View>
                    <View style={{ marginTop: 24, marginBottom: 16 }}>
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
                        <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, password: text }))}
                            setFormData={setFormData}
                            value={password}
                            error={formErrors.passwordError}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ marginBottom: 24 }}>
                            <Text style={{ fontSize: FONTSIZE.medium, textAlign: 'right', color: COLORS.grayBase, fontFamily: FONTS.NotoSansJPRegular, lineHeight: 21, fontWeight: 700 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 24 }}>
                            <View style={{ gap: 12 }}>
                                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign In"} onPress={handleSignin} />
                                <Text style={{ marginHorizontal: 24, textAlign: "center", color: COLORS.gray400, fontSize: 14, fontFamily: FONTS.NotoSansJPRegular }}>Or</Text>
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Google"} icon={icons.GoogleIcon} />
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Apple"} icon={icons.AppleIcon} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <AcceptTerms />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    inputText: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: FONTSIZE.medium,
        color: COLORS.grayBase
    }
})