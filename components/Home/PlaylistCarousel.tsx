import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate, Extrapolate,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.4;
const CARD_HEIGHT = CARD_WIDTH * 1.2;

const playlists = [
    { id: 1, title: 'Starlit Soiree: After Dark Tunes', image: 'https://images.unsplash.com/photo-1530419248307-be80b9468e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D', plays: '262k' },
    { id: 2, title: 'Vintage Vibes: Classic Rock Rollback', image: 'https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D', plays: '182k' },
    { id: 3, title: 'Jazz Junction: Smooth & Swingir', image: 'https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmd8ZW58MHx8MHx8fDA%3D', plays: '1' },
];

const PlaylistCard = ({ item, index, scrollX }:{
    item: {
        image:string,
        title:string,
        plays:string
        id:number
    },index:number,scrollX:any
}) => {
    const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
    ];

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            scrollX.value,
            inputRange,
            [1, 1, 1],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }],
        };
    });

    return (
        <Animated.View style={[styles.card, animatedStyle]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.plays}>{item.plays} plays</Text>
            </View>
        </Animated.View>
    );
};

const PlaylistCarousel = () => {
    const scrollX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Playlists for You</Text>
            <Animated.FlatList
                data={playlists}
                renderItem={({ item, index }) => (
                    <PlaylistCard item={item} index={index} scrollX={scrollX} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                decelerationRate="fast"
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
    },
    flatListContent: {
        // paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        // backgroundColor: 'white',
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '70%',
    },
    textContainer: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    plays: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
});

export default PlaylistCarousel;
