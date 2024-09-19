import React, { useRef } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate, Extrapolate,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH * 0.8;
const SPACING = (SCREEN_WIDTH - CAROUSEL_ITEM_WIDTH) / 4;

const images = [
    // Add your image URLs here
    'https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1511145822182-677fa5800671?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1445052693476-5134dfe40f70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww',
];

const CarouselItem = ({ item, index, scrollX }: {
    item: string,
    index:number,
    scrollX: any
}) => {
    const inputRange = [
        (index - 1) * CAROUSEL_ITEM_WIDTH,
        index * CAROUSEL_ITEM_WIDTH,
        (index + 1) * CAROUSEL_ITEM_WIDTH,
    ];

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            scrollX.value,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolate.CLAMP
        );
        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.4, 1, 0.4],
            Extrapolate.CLAMP
        );
        return {
            transform: [{ scale }],
            opacity,
        };
    });

    return (
        <Animated.View style={[styles.carouselItem, animatedStyle]}>
            <Image source={{ uri: item }} style={styles.image} />
        </Animated.View>
    );
};

const Indicator = ({ scrollX, index }:{scrollX:any, index:number}) => {
    const animatedStyle = useAnimatedStyle(() => {
        const inputRange = [
            (index - 1) * CAROUSEL_ITEM_WIDTH,
            index * CAROUSEL_ITEM_WIDTH,
            (index + 1) * CAROUSEL_ITEM_WIDTH,
        ];
        const width = interpolate(
            scrollX.value,
            inputRange,
            [8, 16, 8],
            Extrapolate.CLAMP
        );
        const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );
        return {
            width,
            opacity,
        };
    });

    return <Animated.View style={[styles.indicator, animatedStyle]} />;
};
const Carousel = () => {
    const scrollX = useSharedValue(0);
    const scrollViewRef = useRef(null);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    return (
        <View>

        <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
        >
            {images.map((image, index) => (
                <CarouselItem
                    key={index}
                    item={image}
                    index={index}
                    scrollX={scrollX}
                />
            ))}
        </Animated.ScrollView>
            <View style={styles.indicatorContainer}>
                {images.map((_, index) => (
                    <Indicator key={index} scrollX={scrollX} index={index} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingTop:16,
        // paddingHorizontal:16
        paddingHorizontal: SPACING,
    },
    carouselItem: {
        width: CAROUSEL_ITEM_WIDTH + 45,
        height: 200,
        overflow: 'hidden',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    indicator: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#333',
        marginHorizontal: 4,
    },
});

export default Carousel;
