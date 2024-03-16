import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ICONS } from "../../../constants"

export default function LikesHeart({ handlePress, liked }) {
    return (
        <View>
            <TouchableOpacity style={styles.dots} onPress={handlePress}>
                {
                    liked ? <ICONS.LikeIcon /> : <ICONS.LikeIconLiked />
                }
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