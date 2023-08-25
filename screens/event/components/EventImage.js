import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EventImage = () => {
    return (
        <View>
            <ImageBackground
                source={require('../../../assets/images/event.jpg')}
                style={styles.image}
            />
            <View>
                <TouchableOpacity style={styles.videoButton}>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {

    },
    videoButton: {}
})