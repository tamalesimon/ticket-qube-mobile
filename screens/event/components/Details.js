import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import globalStyles from "../../../styles/globalStyles";
import { COLORS, FONTS, icons } from "../../../constants";

const Details = () => {
    return (
        <View style={{ marginBottom: 24 }}>
            <Text style={styles.eventTitle}>Xenson Senkaba Art Fest: 2023</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateText}>29</Text>
                        <Text style={styles.dateMonth}>Mar</Text>
                    </View>
                    <View>
                        <Text style={styles.day}>Tuesday</Text>
                        <Text style={styles.time}>10:00 PM - End</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.calender}>
                    <icons.CalendarAddIcon />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.aboutTitle}>About this event</Text>
                <Text style={styles.aboutDetails}>We're celebrating our 30th edition of the California Art Festival in CA this Spring so join us at the Building Park in California State University from March 29 - 30, 2022 with our Private View opening on Saturday, March 26!</Text>
                <TouchableOpacity>
                    <Text style={styles.showMore}>Show more</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    eventTitle: {
        fontFamily: FONTS.NotoSansJPBold,
        fontSize: 20,
        lineHeight: 24,
        color: COLORS.grayBase,
        marginBottom: 24
    },
    dateContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        backgroundColor: COLORS.gray50,
        borderRadius: 10,
        width: 48,
        marginRight: 16
    },
    dateText: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 700,
        fontSize: 14,
        color: COLORS.grayBase,
        lineHeight: 21,
    },
    dateMonth: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 12,
        color: COLORS.gray400,
        lineHeight: 15
    },
    day: {
        fontFamily: FONTS.NotoSansJPBold,
        fontSize: 14,
        lineHeight: 24,
        color: COLORS.grayBase
    },
    time: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 400,
        color: COLORS.gray400
    },
    calender: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderColor: COLORS.primaryBase,
        borderWidth: 1,
        borderRadius: 12,
        display: 'flex',
        height: 48,
        justifyContent: 'center',
        //  alignItems: 'flex-start',
        alignSelf: 'flex-end',
    },
    aboutTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 21,
        marginBottom: 8
    },
    aboutDetails: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 21,
        color: COLORS.gray400,
        marginBottom: 8
    },
    showMore: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 21,
        color: COLORS.primaryBase
    }
})