import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ICONS } from "../../../constants"

export default function CircleQuestion({ handlePress }) {
    return (
        <View>
            <TouchableOpacity onPress={() => { handlePress() }}>
                <ICONS.CircleQuestion />
            </TouchableOpacity>
        </View>
    )
}