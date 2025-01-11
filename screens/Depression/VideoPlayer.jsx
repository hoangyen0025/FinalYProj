import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

export default function VideoPlayer({ route, navigation }) {
    const [MFNVideo, setMFNVideo] = useState([]);
    const { videoId } = route.params; // Get the videoId from navigation params

    useEffect(() => {
        const fetchMFNVideo = async () => {
            try {
                const response = await axios.get('http://158.182.195.7:5001/getMFNVideo');
                if (response.data.length > 0) {
                    console.log(response.data);
                    setMFNVideo(response.data); // Set the fetched videos
                }
            } catch (err) {
                console.error('Error in fetching video', err);
            }
        };
        fetchMFNVideo();
    }, []); // Dependency array to run effect only once on mount

    return (
        <View style={styles.container}>
            <YoutubePlayer
                height={300}
                width={'100%'} // Set width to full
                play={true} // Set this to true if you want to auto-play the video
                videoId={videoId} // Pass the videoId to the YoutubePlayer
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    player: {
        width: '100%', // Full width
        height: 300,   // Set a specific height
    },
});