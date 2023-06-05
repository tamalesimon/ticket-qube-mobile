import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { COLORS, FONTS, FONTSIZE, images, icons } from '../../constants';
import { useTogglePasswordVisibility } from "../../utils/useTogglePasswordVisibility";
import Display from "../../utils/Display"
import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";

import globalStyles from '../../styles/globalStyles';


const ResetPassword = ({ navigation }) => {

    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1, padding:23}}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', gap:8, marginTop:32 }}>
                <View style={{flexDirection: 'column', width:327,}}>
                    <Text style={{...globalStyles.Heading4, textAlign:'left', }} >Reset your password</Text>
                    <Text style={styles.subComment}>Please enter new password for your account.</Text>
                </View>
                <View style={{ marginTop:24, marginBottom:16, flexDirection:'column', alignItems:'center' }}>
                <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                        />
                    <InputField
                            placeholder="Confirm password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                        />
                    <View style={{ marginTop:390}}>
                            <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Create New Password"} onPress={() => navigation.navigate('ResetSuccess')}/>
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