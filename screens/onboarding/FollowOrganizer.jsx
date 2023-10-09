import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import GenericButton from '../../components/buttons/genericButton';
import globalStyles from '../../styles/globalStyles';
import FollowCard from '../../components/card/FollowCard';
import { dummyOrganizers } from '../../utils/DummyOrganizers';
import { LinearGradient } from 'expo-linear-gradient';

export default function FollowOrganiser() {
    const [isFollowing, setIsFollowing] = useState([])

    const toggleFollow = (item) => {
        if (isFollowing.includes(item)) {
            setIsFollowing(isFollowing.filter((i) => i !== item))
        } else {
            setIsFollowing([...isFollowing, item])
        }
    }

    return (
        <LinearGradient
            colors={[COLORS.white, COLORS.gray100]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={{ flex: 1, padding: 24 }}>
                <View style={{ flexDirection: 'column', gap: 8, marginTop: 32 }}>
                    <View style={{ flexDirection: 'column', width: 327, }}>
                        <Text style={{ ...globalStyles.Heading4, textAlign: 'left', }} >Follow Organiser</Text>
                        <Text style={styles.subComment}>Follow an events organiser to get updates when news events are added.</Text>
                    </View>
                    <View style={{ marginTop: 24, marginBottom: 8, width: '100%', }}>
                        <InputField
                            placeholder="Search event based on an organiser"
                            placeholderTextColor={COLORS.gray400}
                            icon={ICONS.SearchIcon}
                            inputType={'text'}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', marginBottom: 4 }}>
                        <Text style={styles.title}>Recomendations</Text>
                        <View style={{ paddingBottom: 10 }}>
                            <FlatList
                                data={dummyOrganizers}
                                keyExtractor={(item) => item?.id}
                                horizontal
                                contentContainerStyle={{ columnGap: 20 }}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <FollowCard isFollowing={isFollowing} onPress={toggleFollow} item={item} />
                                }
                            />
                            {/* <FollowCard isFollowing={isFollowing} onPress={toggleFollow}/> */}
                        </View>
                        <View style={{ marginTop: 24 }}>
                            <GenericButton bgColor="primaryBase" fontColor={"white"} label={"Finish"} onPress={() => navigation.navigate('ResetSuccess')} />
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    subComment: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 400,
        fontSize: 14,
        color: COLORS.gray400
    },
    alreadyAcount: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 500,
        fontSize: 14,
        color: COLORS.primaryBase
    },
    container: {
        gap: 16,
        height: '100%'
    },
    title: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontWeight: 700,
        fontSize: 16,
        color: COLORS.grayBase,
        textAlign: 'left',
        marginBottom: 16
    }
})
