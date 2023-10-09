import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ICONS } from "../../../constants"

export default function Upload({ handlePress }) {
    return (
        <View>
            <TouchableOpacity style={styles.dots} onPress={() => { handlePress() }}>
                <ICONS.UploadIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        paddingVertical: 12,
        paddingRight: 16,
        borderRadius: 12,
    }
})