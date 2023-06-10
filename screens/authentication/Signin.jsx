import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";
import AcceptTerms from "../../components/terms/AcceptTerms";

import globalStyles from '../../styles/globalStyles';
import { color } from "react-native-reanimated";
import InputField from "../../components/inputField/InputField";


const Signin = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
    <SafeAreaView style={{ backgroundColor:COLORS.white, flex:1, padding:24}}>
        <View>
            <View style={{ flexDirection: 'column', marginTop:32  }}>
                <View style={{ alignItems:'center'}}>
                    <Text style={globalStyles.Heading4} >Hello Again!</Text>
                    <Text style={{ fontSize:FONTSIZE.medium, color:COLORS.gray400, fontFamily:FONTS.NotoSansJPRegular, textAlign:"center", fontWeight:400, width:261,}}>Welcome back, you've been missed</Text>
                </View>
                <View style={{ marginTop:24, marginBottom:16 }}>
                        <InputField
                            placeholder="Email"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.MailIcon}
                            inputType={'email'}
                        />
                        <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}

                        />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{marginBottom:24}}>
                        <Text style={{ fontSize: FONTSIZE.medium, textAlign:'right', color: COLORS.grayBase, fontFamily: FONTS.NotoSansJPRegular, lineHeight:21, fontWeight:700 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop:24}}>
                        <View style={{gap:12}}>
                            <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Sign In"}/>
                            <Text style={{ marginHorizontal:24, textAlign: "center", color:COLORS.gray400, fontSize:14, fontFamily:FONTS.NotoSansJPRegular}}>Or</Text>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Google"}  icon={icons.GoogleIcon}/>
                            <GenericButton borderWidth={1} borderColor={"gray200"} fontColor="primary900" label={"Sign In with Apple"}  icon={icons.AppleIcon}/>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <AcceptTerms/>
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