import { Text, View,FlatList, TouchableOpacity, Image} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../Depression/styles';
export default function VideoScreen ({navigation}) {
    const [MFNVideo, setMFNVideo] = useState([]);
    const [videoId, setVideoId] = useState(null);
     useEffect(() => {
    const fetchMFNVideo = async () => {
                 try {
                    const response = await axios.get('http://158.182.195.7:5001/getMFNVideo');
                    if (response.data.length > 0 ){
                        console.log(response.data);
                        setMFNVideo(response.data); // Set the fetched videos
                    }
                    setMFNVideo(response.data);
                 }
                 catch (err) {
                    console.error('Error in fetching video', err);
                 }
             }
             fetchMFNVideo();
            }, []);
            const handleClickThumbnail = (videoId) => {
                navigation.navigate('Video Play', { videoId }); // Navigate to VideoPlayer screen
                return;
            };
    return   (
        <View>
             <FlatList
                data={MFNVideo}
                keyExtractor={(item) => item._id?.$oid || item.id || item.videoId} // Unique key for each video
                renderItem={({ item }) => (
                    <View style={styles.vidContainer}>
                        <TouchableOpacity onPress={()=>  handleClickThumbnail(item.videoId) } style={styles.vidFrame}>
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
    )
};