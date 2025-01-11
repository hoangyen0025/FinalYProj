import React, {useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button} from 'react-native';
import styles from '../Depression/styles';
import axios from 'axios';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'react-native-reanimated';

export default function MindfulnessExScreen ({navigation})  {
    const [MFNImg, setMFNImg] = useState([]);
    const [MFNVideo, setMFNVideo] = useState([]);
    const [videoId, setVideoId] = useState(null);

    /////
    ///const video1 = require ('../Depression/video/how to practice mindfulness.mp4');
    
    useEffect(() => {
        const fetchMFNImg = async () => {
            try {
                const response = await axios.get('http://158.182.195.7:5001/getMFNImage');
                // console.log('Fetched images:', response.data); // Log the fetched data
                // console.log('First item:', response.data[0]); // Log the first item to check its structure
    
                // Check if the first item has the expected properties
                if (response.data.length > 0) {
                    console.log('First item properties:', Object.keys(response.data[0]));
                }
    
                setMFNImg(response.data);
            } catch (err) {
                console.error('Error in fetching image', err);
            }
        };
         const fetchMFNVideo = async () => {
             try {
             const response = await axios.get('http://158.182.195.7:5001/getMFNVideo');
             if (response.data.length > 0 ){
                 console.log('First item properties:', Object.keys(response.data[0]));
             }
             setMFNVideo(response.data);
             }
             catch (err) {
             console.error('Error in fetching video', err);
             }
         }
        fetchMFNImg();
        fetchMFNVideo();
    }, []);
        const handleClickThumbnail = (videoId) => {
            //navigation.navigate('VideoPlayer', { videoId }); // Navigate to VideoPlayer screen
            return;
        };
    const shownImg =  MFNImg.slice(0,5);
    const shownVideo = MFNVideo.slice(0,3);

    // const player = useVideoPlayer(video1, player => {
    //     player.loop = true; 
    //     player.play();
    // });
    //const {isPlaying} = useEvent(player, 'playingChange', {isPlaying: player.playing});
    return (
        
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style={styles.title}>Image</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ImgListScreen")}>
                    <Text style={styles.addition}>View more</Text>
                </TouchableOpacity>
        
            </View>
            <FlatList 
                data = {shownImg}
                horizontal = {true}
                style = {{paddingLeft: 20}}
                keyExtractor={(item) => item._id?.$oid || item.id || item.imgURL} // Provide a unique key for each item
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item.imgURL }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                )}
                showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      
           
                />
             <View style={styles.listVideo}>
                <Text style={styles.title}>Video</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Video Details")}>
                    <Text style={styles.addition}>View more</Text>
                </TouchableOpacity>
                </View>
                <View>
             <FlatList
                data={shownVideo}
                keyExtractor={(item) => item._id?.$oid || item.id || item.videoId} // Unique key for each video
                renderItem={({ item }) => (
                    <View style={styles.vidContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Video Play", {videoId: item.videoId})} style={styles.vidFrame}>
                            <Image 
                                source ={{uri: item.thumbnail}}
                                style = {styles.thumbnailVid}  
                                resizeMode="contain"     
                            />
                            <View style={styles.infoVidContainer}>
                                <Text 
                                style={styles.titleVid}
                                >{item.title}</Text>
                                <Text>{item.author}</Text>
                                <Text style={styles.dateandAuthor }>
                                   {item.date.split('T')[0]}
                                </Text>
                             </View>
                        </TouchableOpacity>
       
                    </View>
                )}
            />
        </View>
            
            </View>
    );
}