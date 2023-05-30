import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import GenericButton from "../../components/buttons/genericButton";

import globalStyles from '../../styles/globalStyles';


const ResetPassword = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1, padding:23}}>
        <View>
            <View style={{ flex: 1, flexDirection: 'column', gap:8, marginTop:32 }}>
                <View style={{flexDirection: 'column', alignItems: 'left', paddingLeft:12, gap:8}}>
                    <Text style={{...globalStyles.Heading4, textAlign:'left', flex:1, alignItems: 'left'}} >Reset password</Text>
                    <View style={{marginTop:8 }}>
                        <Text style={styles.subComment}>Please enter new password for your account.</Text>
                    </View>
                </View>
                <View style={{ marginTop:24, marginBottom:16, flexDirection:'column', alignItems:'center' }}>
                <View>
                        <icons.LockIcon style={{ position: 'absolute', top:16, left:20}} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            secureTextEntry={showPassword}
                            style={{ flex:1, backgroundColor:COLORS.gray50,  borderRadius:16, height:56, width:327, padding:16, paddingLeft:50, marginBottom:16}}/>
                        <TouchableOpacity onPress={toggleShowPassword} style={{position:'absolute', top:16, right:20}}>
                            {showPassword? <icons.EyeOffIcon/> : <icons.EyeIcon/>}
                        </TouchableOpacity>
                    </View>
                    <View>
                        <icons.LockIcon style={{ position: 'absolute', top:16, left:20}} />
                        <TextInput
                            placeholder="Confirm password"
                            placeholderTextColor={COLORS.gray400}
                            secureTextEntry={showPassword}
                            style={{ flex:1, backgroundColor:COLORS.gray50,  borderRadius:16, height:56, width:327, padding:16, paddingLeft:50, marginBottom:16}}/>
                        <TouchableOpacity onPress={toggleShowPassword} style={{position:'absolute', top:16, right:20}}>
                            {showPassword? <icons.EyeOffIcon/> : <icons.EyeIcon/>}
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop:24}}>
                        <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Create New Password"}/>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:400,
        fontSize:14,
        color:COLORS.gray400
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight:500,
        fontSize:14,
        color:COLORS.primaryBase
    }
})