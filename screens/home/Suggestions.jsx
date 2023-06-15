import React from 'react';
import { View, StyleSheet} from 'react-native';
import SuggestionCard from '../../components/card/SuggestionCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'

export default function Suggestions() {
    return (
        <View>
            <SectionHeaders sectionTitle="Suggestions for you"/>
            <View style={styles.suggestionSection}>
                <SuggestionCard/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionSection: {
        flexDirection: 'column',
        gap:16
    }
})
