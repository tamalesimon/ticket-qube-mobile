import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { COLORS, FONTS,icons } from '../../constants';
import { useFormValidation } from "../../hooks/useFormValidation";
import { resetPassword }  from "../../redux/authSlice";

import Display from "../../utils/Display"
import GenericButton from "../../components/buttons/genericButton";
import InputField from "../../components/inputField/InputField";

import globalStyles from '../../styles/globalStyles';


const ResetPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.auth)
    const { formData, formErrors, setFormData, handleSubmit } = useFormValidation(initialFormData);
    const { password, confirmPassword } = formData;

    const handleResetPassword = () => {
        const data = { password, confirmPassword };
        const submission = handleSubmit(data);
        if (submission.isValid) {
            dispatch(resetPassword(data))
            if(!error) {
                navigation.navigate('ResetSuccess')
            } else {
                navigation.navigate('ResetFail')
            }
        }
    }

    return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1, flexDirection: 'column', padding:23}}>
            <View style={{ gap:8, marginTop:32, alignItems: 'center'}}>
                <View style={{ width:'100%',}}>
                    <Text style={{...globalStyles.Heading4, textAlign:'left', }} >Reset your password</Text>
                    <Text style={styles.subComment}>Please enter new password for your account.</Text>
                </View>
            </View>
            <View style={{ marginTop:24, marginBottom:16, flexDirection:'column', alignItems:'center' }}>
                    <InputField
                            placeholder="Password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, password: text }))}
                            value={password}
                            error={formErrors.passwordError}
                        />
                    <InputField
                            placeholder="Confirm password"
                            placeholderTextColor={COLORS.gray400}
                            icon={icons.LockIcon}
                            inputType={'password'}
                            onChangeText={(text) => setFormData(prevState => ({ ...prevState, password: text }))}
                            value={password}
                            error={formErrors.passwordError}
                        />
                </View>
            <View style={{ marginTop:390}}>
                <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Create New Password"} onPress={handleResetPassword}/>
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