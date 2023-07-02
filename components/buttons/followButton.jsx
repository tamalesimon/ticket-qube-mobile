import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { COLORS, FONTS  } from "../../constants";

export default function FollowButton({ icon: IconComponent, borderWidth, borderColor, label, onPress, bgColor, fontColor, item }) {
    return (
    <TouchableOpacity onPress={() => onPress(item)} style={{ ...styles.button, borderWidth:borderWidth, borderColor:COLORS[borderColor], backgroundColor:COLORS[bgColor] }}>
        <View style={{ position: 'absolute', top:16, left:20}}>
            {IconComponent && <IconComponent />}
        </View>
        <Text style={{...styles.label, color:COLORS[fontColor]}}>{label}</Text>
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
    },
    label: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: '700',
        lineHeight: 24
    }
})
