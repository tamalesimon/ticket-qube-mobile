import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from "../../../constants"

export default function LikesHeart() {
    return (
        <View>
            <TouchableOpacity style={styles.dots}>
                <icons.LikeIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        paddingVertical: 12,
        // paddingHorizontal: 13.5,
        borderRadius: 12,
    }
})