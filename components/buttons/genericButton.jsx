import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { COLORS, FONTS, ICONS } from "~/constants";

export default function GenericButton({
    iconName,
    borderWidth,
    borderColor,
    label,
    onPress,
    bgColor,
    fontColor,
    shouldCenterButton,
    fontSize,
    withWidth
}) {

    const buttonWidthChange = withWidth ? { ...styles.button, width: withWidth } : styles.button;
    const buttonStyle = shouldCenterButton ? { ...styles.button, width: '100%' } : styles.button;
    const IconComponent = ICONS[iconName]
    return (
        <TouchableOpacity onPress={onPress} style={{ ...buttonStyle, borderWidth: borderWidth, buttonWithChange: buttonWidthChange, borderColor: COLORS[borderColor], backgroundColor: COLORS[bgColor], ...(IconComponent && { gap: 8 }) }}>
            <View>
                {IconComponent && <IconComponent />}
            </View>
            <Text style={{ ...styles.label, color: COLORS[fontColor], fontSize }}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        height: 56,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    label: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: '700',
        lineHeight: 24
    }
})
