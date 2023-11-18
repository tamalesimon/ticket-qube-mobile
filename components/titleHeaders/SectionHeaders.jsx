import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import { Skeleton } from 'moti/skeleton';

export default function SectionHeaders({ sectionTitle, isLoading }) {
    return (
        <>
            {isLoading ?
                (
                    <Skeleton.Group show={isLoading}>
                        <View style={styles.headers}>
                            <Skeleton width={150} height={25} colorMode='light' show>
                                <Text style={styles.headerTitle}>{sectionTitle}</Text>
                            </Skeleton>
                            <Skeleton width={45} height={25} colorMode='light' show>
                                <TouchableOpacity>
                                    <Text style={styles.headerSubTitle}>See All</Text>
                                </TouchableOpacity>
                            </Skeleton>
                        </View>
                    </Skeleton.Group>
                ) : (
                    <View style={styles.headers}>
                        <Text style={styles.headerTitle}>{sectionTitle}</Text>
                        <TouchableOpacity>
                            <Text style={styles.headerSubTitle}>See All</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    headerTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.grayBase,
        fontWeight: 700
    },
    headerSubTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 14,
        fontWeight: 500,
        color: COLORS.gray400
    },
})
