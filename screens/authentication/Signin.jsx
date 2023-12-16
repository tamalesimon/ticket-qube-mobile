import React, { useCallback, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, ICONS } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";
import AcceptTerms from "../../components/terms/AcceptTerms";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../redux/authSlice";
import globalStyles from '../../styles/globalStyles';
import InputField from "../../components/inputField/InputField";
import { useFormValidation } from '../../hooks/useFormValidation.js';
import Display from '../../utils/Display';
import LoadingIndicator from "../../components/loaders/LoadingIndicator";



const Signin = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, error, status, isAuthenticated } = useSelector((state) => state.auth)
    const initialFormData = { email: '', password: '' }
    const { formData, formErrors, setFormData, handleSubmit } = useFormValidation(initialFormData);

    const handleNavigation = () => {
        // if (status) {
        //     navigation.replace('NavigationTabs');
        // }

        AsyncStorage.getItem("qubeId").then(async (value) => {
            if (value == null) {
                await AsyncStorage.setItem("qubeId", "true");
                navigation.navigate("DOB");
            } else {
                if (status && value) {
                    navigation.replace('NavigationTabs');
                }
            }
        })
    }

    // useEffect(() => {
    //     AsyncStorage.getItem("qubeId").then(async (value) => {
    //         if (value == null) {
    //             await AsyncStorage.setItem("qubeId", "true");
    //             navigation.navigate("DOB");
    //         }
    //     })
    // }, [])

    useEffect(() => {
        handleNavigation();
        navigation.setOptions({
            headerStyle: {
                backgroundColor: isLoading ? '#7F7F7F' : 'white'
            }
        });
    }, [status, isLoading])


    const handleSignin = () => {
        const { isValid, data } = handleSubmit();
        if (isValid) {
            console.log(data)
            dispatch(signin(data));
        } else {
            console.log(formErrors)
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <View>
                <View style={{ flexDirection: 'column', marginTop: 32 }}>
                    <View style={{}}>
                        <Text style={globalStyles.Heading4} >Hello once Again!</Text>
                        <Text style={{ fontSize: FONTSIZE.medium, color: COLORS.gray400, fontFamily: FONTS.NotoSansJPRegular, fontWeight: 400, width: Display.setWidth(261), }}>Welcome back, you've been missed</Text>
                    </View>
                    <View style={{ marginTop: 24, marginBottom: 16 }}>
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
                        <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.LockIcon}
                            inputType={'password'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, password: text }))}
                            setFormData={setFormData}
                            value={formData.password}
                            error={formErrors.passwordError}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ marginBottom: 24 }}>
                            <Text style={{ fontSize: FONTSIZE.medium, textAlign: 'right', color: COLORS.grayBase, fontFamily: FONTS.NotoSansJPRegular, lineHeight: 21, fontWeight: 700 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 24 }}>
                            <View style={{ gap: 12 }}>
                                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign In"} onPress={handleSignin} shouldCenterButton />
                                <Text style={{ marginHorizontal: 24, textAlign: "center", color: COLORS.gray400, fontSize: 14, fontFamily: FONTS.NotoSansJPRegular }}>Or</Text>
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Google"} icon={ICONS.GoogleIcon} shouldCenterButton />
                                <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Apple"} icon={ICONS.AppleIcon} shouldCenterButton/>
                            </View>
                            <View style={{ alignItems: 'center' }}>
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

export default Signin

const styles = StyleSheet.create({
    inputText: {
        fontFamily: FONTS.NotoSansJPMedium,
        fontSize: FONTSIZE.medium,
        color: COLORS.grayBase
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