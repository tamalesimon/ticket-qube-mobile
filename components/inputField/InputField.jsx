import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import { set } from 'react-native-reanimated';

export default function InputField({
    placeholder,
    icon: IconComponent,
    inputType,
    value,
    onChangeText,
    setFormData,
    error,
    ...props
}) {
    const [secureTextEntry, setSecureTextEntry] = useState(inputType === 'password' === true);
    const [isFocused, setIsFocused] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const [originColor, setOriginColor] = useState('')

    useEffect(() => {
        if (!isFocused || !error || !isEmpty) {
            setOriginColor('')
        }
    }, [isFocused, error, isEmpty])

    function toggleSecureEntry() {
        setSecureTextEntry(!secureTextEntry);
    };
    const handleBlur = () => {
        setIsFocused(false)
        if (!value) {
            setIsEmpty(true)
        }
    };
    const borderColor = error && isEmpty ? COLORS.errorLight : (isFocused || value && !error ? COLORS.primaryBase : '');
    return (
        <View style={{ ...styles.container, borderColor: borderColor, borderWidth: isFocused || error && isEmpty || value && !error ? 1 : 0 }}>
            {IconComponent && <IconComponent style={{ paddingTop: 8 }} />}
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                cursorColor={COLORS.primaryBase}
                secureTextEntry={secureTextEntry}
                onFocus={() => {
                    setIsFocused(true)
                    if (!originColor) {
                        setOriginColor(borderColor);
                    }
                }

                }
                onBlur={handleBlur}
                value={value}
                onChangeText={(text) => {
                    onChangeText(text);
                    setFormData((prevFormData) => ({ ...prevFormData, [inputType]: text }))
                    if (!isEmpty) {
                        setIsEmpty(false)
                    }
                    if (originColor && !isFocused && !error && !isEmpty) {
                        setOriginColor('');
                    }
                }}
                {...props}
            />
            {
                inputType === "password" && (
                    <TouchableOpacity style={styles.showIcon} onPress={toggleSecureEntry}>
                        {secureTextEntry ? <ICONS.EyeOffIcon /> : <ICONS.EyeIcon />}
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
        backgroundColor: COLORS.gray50,
        borderRadius: 16,
        height: 56, width: '100%',
        padding: 16,
        marginBottom: 16
    },
    showIcon: {
        position: 'absolute',
        top: 16,
        right: 20
    },
    textInput: {
        marginLeft: 12,
        height: 40,
        width: '70%',
        borderWidth: 0, // This will remove the border
        borderColor: 'transparent', // This will make the border color transparent
        borderRadius: 0, // This will make the border edges straight
        backgroundColor: 'transparent', // This will make the background color transparent
    },
    textInfocus: {
        color: COLORS.grayBase,
        fontFamily: FONTS.NotoSansJPMedium
    }
})
