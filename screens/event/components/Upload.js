import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from "../../../constants"

export default function Upload({handlePress}) {
    return (
        <View>
            <TouchableOpacity style={styles.dots} onPress={() => {handlePress();}}>
                <icons.UploadIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        paddingVertical: 12,
        paddingRight:16,
        borderRadius: 12,
    }
})