import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../Depression/styles';
import AntDesign from '@expo/vector-icons/AntDesign';//import songs from '../songs/songs';
//import TrackPlayer, {Capability, State, usePlaybackState }from 'react-native-track-player';
//Capability, Event, RepeatMode, useProgress, useTrackPlayerEvents
const songs = [
    { id: 1,
     artwork: { uri: 'https://cdn.pixabay.com/audio/2024/08/19/08-30-48-578_200x200.jpg' },
     title: 'Meditation Healing Mental Health Spiritual Music',
     artist: "Denis-Pavlov-Music",
     duration: 499},
     { id: 2,
        artwork: { uri: 'https://cdn.pixabay.com/audio/2023/11/09/15-53-45-137_200x200.jpg' },
        title: 'Music For Meditation: The Rising Sun',
        artist: "TheFealdoProject",
        duration: 225},    // Add more songs...
    ];


 export default function MusicScreen() {
    //const playbackState = usePlaybackState();
    const songSlider = useRef(null);
    const [sliderState, setSliderState] = useState(0); // Start from 0
    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState(0);


    const renderSongs = ({ item }) => {
        return (
            <Animated.View style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ marginTop: 10, fontWeight: 'bold', marginBottom: 30 }}>{item.title}</Text> {/* Display song title */}
                
                <Image 
                    source={item.artwork}
                    style={{ width: 200, height: 200, borderRadius: 10 }} //thumbnail
                />
                <Text style={{ marginTop: 10, fontWeight: 'bold', marignBottom: 30 }}>{item.artist}</Text> {/* Display song title */}

            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.FlatList 
                ref={songSlider}
                data={songs}
                renderItem={renderSongs}
                keyExtractor={(item) => item.id}
                horizontal 
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: { x: scrollX }
                        }
                    }],
                    { useNativeDriver: true }
                )}
            />
             <Slider
                style={styles.sliderEmoji}
                value={sliderState}
                step={1}
                onValueChange={(value) => {
                    setSliderState(value);
                    // Optionally scroll to the song based on slider value
                    songSlider.current.scrollToIndex({ index: value });
                }}
                minimumValue={0}
                maximumValue={songs.length - 1} // Update this based on the number of songs
                minimumTrackTintColor="#E6FDED"
                maximumTrackTintColor="#CBD5E1"
                thumbTintColor="green" // Set the thumb color to green
            />
            <View style={styles.playerContainer} >
                <TouchableOpacity>
                    <AntDesign name="stepbackward" size={24} color="black" style={styles.playerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
                    <AntDesign name={playbackState == State.Playing ? "pause" : "caretright"} size={24} color="black" style={styles.playerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="stepforward" size={24} color="black"style={styles.playerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
