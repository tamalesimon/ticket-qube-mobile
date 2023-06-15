import React from 'react';
import { View, StyleSheet} from 'react-native';
import EventCard from '../../components/card/EventCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'

export default function Upcoming() {
    return (
        <View>
            <SectionHeaders sectionTitle="Upcoming events" />
            <View style={styles.eventSection}>
                <EventCard/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    eventSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:16
    }
});
