import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { icons, COLORS } from '../../constants';

export default function InputField({
    placeholder,
    icon: IconComponent,
    inputType,
    ...props
}) {
    const [secureTextEntry, setSecureTextEntry] = useState(inputType === 'password' === true);
    const [isFocused, setIsFocused] = useState(false)

    function toggleSecureEntry() {
        setSecureTextEntry(!secureTextEntry);
    }
  return (
    <View style={{...styles.container, borderColor:isFocused ? COLORS.primaryBase : ' ', borderWidth: isFocused ? 1: 0}}>
      {IconComponent && <IconComponent style={{paddingTop:8}} />}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {
        inputType === "password" && (
            <TouchableOpacity style={styles.showIcon} onPress={toggleSecureEntry}>
                { secureTextEntry ? <icons.EyeOffIcon/> : <icons.EyeIcon/>}
            </TouchableOpacity>
        )
      }
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:COLORS.gray50,
        borderRadius:16,
        height:56, width:'100%',
        padding:16,
        marginBottom:16
    },
    showIcon: {
        position:'absolute',
        top:16,
        right:20
    },
    textInput:{
        marginLeft:12,
        height:40,
        borderWidth: 0, // This will remove the border
        borderColor: 'transparent', // This will make the border color transparent
        borderRadius: 0, // This will make the border edges straight
        backgroundColor: 'transparent', // This will make the background color transparent
    }
})
