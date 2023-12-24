import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../constants'

const Tab = ({ name, activeTab, onHandleClick }) => {
    return (
        <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleClick}>
            <Text style={styles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    )

}

const TabButtons = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <View style={{ justifyContent: 'center', flex:'auto' }}>
            <FlatList
                data={tabs}
                activeTab={activeTab}
                renderItem={({ item }) => (
                    <Tab name={item} activeTab={activeTab} onHandleClick={() => setActiveTab(item)} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: 16, justifyContent: 'center' }}
            />
        </View>
    )
}

export default TabButtons;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        textAlign: 'center'
        // marginTop: 24,
        // marginBottom: 16,
        // borderColor: COLORS.white,
        // borderWidth: 4
    },
    btn: (name, activeTab) => ({
        padding: 16,
        borderBottomWidth: name == activeTab ? 2 : 0,
        borderBottomColor: name === activeTab ? COLORS.primaryBase : "",
    }),
    btnText: (name, activeTab) => ({
        color: name === activeTab ? COLORS.primaryBase : COLORS.gray400,
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: name === activeTab ? 700 : 500,
        lineHeight: 21
    })
})