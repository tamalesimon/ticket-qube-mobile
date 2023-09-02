import { useCallback, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import { icons, COLORS, FONTS } from '../../../constants';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate, Extrapolate } from 'react-native-reanimated';

const ShareEvent = forwardRef(({ activeHeight }, ref) => {
    const height = useWindowDimensions().height;
    const topAnimation = useSharedValue(height);
    const animationStyle = useAnimatedStyle(() => {
        const top = topAnimation.value;
        return {
            top,
        }
    });

    const backDropAnimation = useAnimatedStyle(() => {
        const opacity = interpolate(
            topAnimation.value,
            [height, activeHeight],
            [0, 0.5],
            Extrapolate.CLAMP
        );
        const display = opacity === 0 ? 'none' : 'flex'
        return {
            opacity, display
        }
    })

    const expand = useCallback(() => {
        'worklet';
        topAnimation.value = withSpring(activeHeight, {
            damping: 100,
            stiffness: 400
        });
    }, []);

    const close = useCallback(() => {
        'worklet';
        topAnimation.value = withSpring(height, {
            damping: 100,
            stiffness: 400
        })
    }, []);

    useImperativeHandle(ref, () => ({
        expand, close
    }), [expand, close])
    return (
        // <Animated.View style={[styles.container, animationStyle]}>
        //     <View style={styles.section}>
        //         <View style={styles.divider}></View>
        //         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
        //             <Text style={styles.sectionTitle}>Share this event</Text>
        //             <TouchableOpacity>
        //                 <icons.CloseIcon />
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </Animated.View>
        <>
            <TouchableWithoutFeedback onPress={() => { close() }}>
                <Animated.View style={[styles.backDrop, backDropAnimation]} />
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.container, animationStyle]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                </View>

            </Animated.View>
        </>
    )
})

export default ShareEvent;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        //flexDirection: 'column-reverse'
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: COLORS.gray100,
        borderRadius: 20,
    },
    section: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        marginTop: 16,
        paddingBottom: 16,
        borderRadius: 40,
        // width: 375,
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // flexDirection: 'column-reverse'
    },
    divider: {
        width: 32,
        height: 6,
        backgroundColor: COLORS.gray100,
        borderRadius: 50,
        marginTop: 12,
        alignSelf: "center"
    },
    sectionTitle: {
        fontFamily: FONTS.NotoSansJPRegular,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 24,
        color: COLORS.grayBase
    },
    backDrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})