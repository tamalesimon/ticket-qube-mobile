import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ICONS } from "../../../constants"

export default function CloseIcon({ handlePress }) {
    return (
        <View>
            <TouchableOpacity onPress={() => { handlePress() }}>
                <ICONS.CloseIcon />
            </TouchableOpacity>
        </View>
    )
}