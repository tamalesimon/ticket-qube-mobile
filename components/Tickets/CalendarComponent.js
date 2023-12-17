import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import EventDateStrip from '../../screens/event/components/EventDateStrip'
import { COLORS, FONTS, ICONS } from '../../constants'

const CalendarComponent = () => {
    return (
        <View style={styles.parentContainerL}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.monthYear}>
                        <TouchableOpacity>
                            <ICONS.ChevronLeft />
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 8 }}>October 2023</Text>
                        <TouchableOpacity>
                            <ICONS.ChevronRight />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <ICONS.CalendarDetails dim={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 12 }}>
                    <EventDateStrip date={new Date()} />
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                </View>
            </View>
        </View>
    )
}

export default CalendarComponent

const styles = StyleSheet.create({
    parentContainerL: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24
    },
    container: {
        flexDirection: 'column',
        gap: 24
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    monthYear: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    line: {
        width: 32,
        height: 6,
        backgroundColor: COLORS.gray100,
        borderRadius: 50,
    }
})