import { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';

import globalStyles from '../../styles/globalStyles';

export default function OtpInput({ value, onChangeText, index }) {

    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused])

    const handleTextChange = (text) => {
        onChangeText(text);
        if (text.length === 1 && index < 3) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }

    const handleKeyPress = ({nativeEvent}) => {
        if (nativeEvent.key === 'Backspace' && index > 0) {
            inputRef.current.blur();

            setTimeout(() =>{
            inputRef.current.focus();
            }, 0);
        } else if (nativeEvent.key !== 'Backspace' && index < 3  ) {
            inputRef.current.blur();

            setTimeout(() =>{
            inputRef.current.focus();
            }, 0);
        }
    }
    return (
        <View style={{ ...styles.inputBox, borderColor: isFocused ? COLORS.primaryBase : ' ', borderWidth: isFocused ? 1 : 0 }}>
            <TextInput
                ref={inputRef}
                style={[globalStyles.Heading4, styles.inputText]}
                keyboardType="numeric"
                cursorColor={COLORS.primaryBase}
                maxLength={1}
                onFocus={() => setIsFocused(true)}
                value={value}
                onChangeText={handleTextChange}
                onKeyPress={handleKeyPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        borderRadius: 16,
        width: 56,
        height: 56,
        backgroundColor: COLORS.gray50,
        marginRight: 11.75,

    },
    inputText: {
        // paddingHorizontal:25,
        paddingVertical: 9,
        textAlign: 'center',
        // borderColor:COLORS.primaryBase,
        borderRadius: 16,
        // borderWidth: 1,
    },
})