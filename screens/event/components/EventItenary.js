import { View, Image, Text, StyleSheet } from "react-native"
import { COLORS, FONTS, ICONS } from "../../../constants";
import { checkImageURL, returnDateTime } from "../../../utils/utils";

const EventItenary = ({ data, isLoading }) => {
    return (
        <View style={{ marginBottom: 24, gap: 16 }}>
            <Text style={styles.sectionTitle}>Activity list</Text>
            <View style={{ flexDirection:'row', gap: 16 }}>
                {
                    data?.eventActivities?.map((item) => {
                        return (
                            <View style={styles.container} key={item.id}>
                                <Image source={{ uri: checkImageURL(item?.picture) ? item.picture : "../../../assets/images/test_image.jpg" }} style={{ resizeMode: 'cover', borderRadius: 117, width: 64, height: 64 }} />
                                <View style={styles.detailsName}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                                <View style={styles.timeDetails}>
                                    <ICONS.ClockDetailsTime />
                                    <Text>{`${returnDateTime(item?.startDate)} - ${returnDateTime(item?.endDate)}`}</Text>
                                </View>
                            </View>
                        )

                    })
                }
            </View>
        </View>
    )
}

export default EventItenary;

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        paddingVertical:24,
        paddingHorizontal:18,
        backgroundColor: COLORS.gray50,
        borderRadius: 16,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: FONTS.NotoSansJPRegular,
        lineHeight: 24,
        color: COLORS.grayBase,
        fontWeight: 700
    },
    detailsName: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    timeDetails: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    titleText: {

    },
    subText: {},
    timeDetailsText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    }
})