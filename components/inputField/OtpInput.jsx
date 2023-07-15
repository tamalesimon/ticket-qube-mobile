import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';

import globalStyles from '../../styles/globalStyles';

export default function OtpInput({
    value,
    onChangeText,
    index
}) {
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false)
    const handleTextChange = (text) => {
        onChangeText(text);
        if(text.length ===1 && index < 3){
            inputRef.current.focus();
        }
    }
    return (
        <View style={{...styles.inputBox, borderColor:isFocused ? COLORS.primaryBase : ' ', borderWidth: isFocused ? 1: 0}}>
            <TextInput
                ref={inputRef}
                style={[globalStyles.Heading4, styles.inputText]}
                keyboardType="numeric"
                maxLength={1}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                onChangeText={handleTextChange}
                />
        </View>
    )
}

const styles = StyleSheet.create({
 inputBox:{
        borderRadius: 16,
        width:56,
        height:56,
        backgroundColor: COLORS.gray50,
        marginRight:11.75,
        
    },
    inputText:{
        // paddingHorizontal:25,
        paddingVertical:9,
        textAlign: 'center',
        // borderColor:COLORS.primaryBase,
        borderRadius:16,
        // borderWidth: 1,
    },
})