import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from "../../../constants"

export default function CircleQuestion({ handlePress }) {
    return (
        <View>
            <TouchableOpacity onPress={() => { handlePress() }}>
                <icons.CircleQuestion />
            </TouchableOpacity>
        </View>
    )
}