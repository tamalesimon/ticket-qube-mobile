import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList} from 'react-native';
import SuggestionCard from '../../components/card/SuggestionCard';
import SectionHeaders from '../../components/titleHeaders/SectionHeaders'
import useDataFetch from '../../utils/useDataFetch'

export default function Suggestions() {
    const { data, isLoading, error, refetch } = useDataFetch('3002/suggestion')

    const renderSuggestion = () => {
        if (isLoading) {
            return <ActivityIndicator size="large" colors="black" />
        } else {
            return (
                <View>
                    <SectionHeaders sectionTitle="Suggestions for you"/>
                    <View style={{marginTop:16}}>
                    {
                        data.map((item) => {
                            return (
                                <SuggestionCard style={styles.suggestionSection} key={item.id} item={item}/>
                            )
                        })
                    }
                    </View>
                </View>
            )
        }
    }
    return (
        <View>
        {renderSuggestion()}
        </View>
    );
}

const styles = StyleSheet.create({
    suggestionSection: {
        flexDirection: 'column',
        gap:16,
        // marginHorizontal:10
    }
})
