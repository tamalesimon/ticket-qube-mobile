import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { icons, COLORS } from "../../../constants";
import futuristic from "../../../assets/images/futurist.avif"

const EventImage = () => {
    return (
        <View style={{ marginBottom: 16 }}>
            <ImageBackground
                source={require('../../../assets/images/test_image.jpg')}
                style={styles.image}
                resizeMode='cover'
            >
                <View style={{ flexDirection: 'column-reverse', height: '100%' }}>
                    <TouchableOpacity >
                        <View style={styles.videoButton}>
                            <icons.VideoIcon />
                            <View style={{ paddingLeft: 4 }}>
                                <Text style={styles.textButton}>Watch Video</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default EventImage;

const styles = StyleSheet.create({
    image: {
        height: 240,
        borderRadius: 16,
        overflow: 'hidden',
        padding: 16,
        // shadowColor: "#111827",
        // shadowOffset: {
        //     width: 0,
        //     height: 18,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 20.00,
        // elevation: 5
    },
    videoButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: COLORS.grayBase,
        borderRadius: 12,
        flexDirection: "row",
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
        // alignSelf: 'flex-end',
        width: 124,
        shadowColor: "#111827",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 5,
    },
    watchVideoIcon: {
        // position: 'absolute',
        // left: '4.8%',
        // right: '4.8%',
        // top: '59.31%',
        bottom: 0,

        // flexDirection: 'row',
        padding: 12,
        textAlignVertical: 'center',
        borderRadius: 16,

        // shadowColor: "#111827",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 5.62,
        // elevation: 7
    }, textButton: {
        color: COLORS.white,
    }
})