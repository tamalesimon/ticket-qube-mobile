import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";
import AcceptTerms from "../../components/terms/AcceptTerms";
import { createAccount } from "../../redux/authSlice";

import globalStyles from '../../styles/globalStyles';


const Signup = ({ navigation }) => {

    const dispatch = useDispatch();
    const isLoading =  useSelector((state) => state.auth.isLoading)
    const error = useSelector((state) => state.auth.error);
    const userinfo = useSelector((state) => state.auth.userinfo)

    const [nameInput, setNameInput] = useState('')
    const [ { firstName, lastName, email, password, phoneNumber, dateOfBirth, userRole }, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber: '',
        dateOfBirth: '1987-01-10T00:00:00.00Z',
        userRole: "CLIENT" })

    const handleSignup = () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            dateOfBirth,
            userRole
        }
        dispatch(createAccount(data));
        navigation.navigate('Verify', {email})
    }

    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1, padding:23}}>
        <View>
            <View style={{ flexDirection: 'column', gap:8, marginTop:32 }}>
                <View style={{flexDirection: 'column', gap:8}}>
                    <Text style={{...globalStyles.Heading4, textAlign:'left'}}>Create an account</Text>
                    <View>
                        <Text style={styles.subComment}>Enter your Name, Email and Password to sign up.</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                            <Text style={styles.alreadyAcount}>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom:16, marginTop:24,  }}>
                <InputField
                            placeholder="Your name"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.UserIcon}
                            inputType={'names'}
                            value={nameInput}
                            onChangeText={(text) => {
                                setNameInput(text);
                                const names = text.split(' ');
                                if (names.length === 2) {
                                    const [firstName, lastName] = names;
                                    setFormData(prevState => ({...prevState, firstName, lastName}));
                                    } else if (names.length === 4) {
                                        const firstName = names.slice(0, 2).join(' ');
                                        const lastName = names.slice(2).join(' ');
                                        setFormData(prevState => ({...prevState, firstName, lastName}));
                                    } else {
                                        setFormData(prevState => ({...prevState, firstName: text, lastName: ''}));
                                    }
                                }}
                            setFormData={setFormData}
                        />
                <InputField
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.MailIcon}
                            inputType={'email'}
                            value={email}
                            onChangeText={(text) => setFormData(prevState => ({...prevState, email:text}))}
                            setFormData={setFormData}
                        />
                        <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                            value={password}
                            onChangeText={(text) => setFormData(prevState => ({...prevState, password:text}))}
                            setFormData={setFormData}

                        />
                    <View style={{ marginTop:24}}>
                        <View style={{gap:12}}>
                            <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign Up"} onPress={handleSignup}/>
                            <Text style={{ fontFamily:FONTS.NotoSansJPRegular, color:COLORS.gray400, fontWeight:400, fontSize:FONTSIZE.medium, textAlign: "center", marginHorizontal:24 }}>Or</Text>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign Up with Google"}  icon={icons.GoogleIcon}/>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign Up with Apple"}  icon={icons.AppleIcon}/>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <AcceptTerms/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:400,
        fontSize:14,
        color:COLORS.gray400,
        lineHeight:24
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:500,
        fontSize:14,
        color:COLORS.primaryBase,
        lineHeight:24
    }
})