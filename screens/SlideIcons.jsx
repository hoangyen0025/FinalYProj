import React from 'react';
import {useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import axios from 'axios';
// Import your local image files
import depressedIcon from './img/depressed.png';
import worriedIcon from './img/worried.png';
import stressedIcon from './img/stressed.png';
import happyIcon from './img/happy.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import MainSurvey from './survey/MainSurvey';
import styles from './allstyle';
export default function SlideIcons({ navigation,route }) {
    //const email = route.params?.email; // Optional chaining to avoid error
    
    const [sliderState, setSliderState] = useState(0); // Start from 0
    const emojis = [
        {image: depressedIcon, key: 'depressedIcon'},
        {image: worriedIcon, key: 'worriedIcon'},
        {image: stressedIcon, key: 'stressedIcon'},
        {image: happyIcon, key: 'happyIcon'},
    ];
    //TO GET ALL USER DATA 
    // async function getData(){
    //     const token = await AsyncStorage.getItem('token'); //get the token 
    //     console.log(token); //show token  
    //     if (token) {
    //         try {
    //             const res = await axios.post('http://192.168.100.3:5001/userData', { token });
    //             console.log(res.data); // Show all data of that user
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //             Alert.alert('Error', 'Failed to fetch user data');
    //         }
    //     } else {
    //         Alert.alert('Access denied. You must be logged in to use this functionality');
    //         navigation.navigate("LoginScreen");
    //     }
    // }
    // useEffect(() => {
    //     getData();//show all data of that user 
    // },[]);

    // Determine which emoji to show based on slider value
   // const currentEmoji = emojis[Math.round(sliderState * (emojis.length - 1))].image;
    //const currentIndex = Math.floor(sliderState * (emojis.length - 1));
    useEffect(() => {
        axios.post("")
    }) 

    const currentEmojiIndex = Math.round(sliderState);
    //console.log(currentEmojiIndex); ///debug 1 2 3 4
    const currentEmoji = emojis[currentEmojiIndex]?.image; // access image in emojis array 
    //console.log(currentEmoji); //debug 26 27 28 29 
    async function handleEmoji() {
        const token = await AsyncStorage.getItem('token'); // Fetch the token here
        if (!token) {
            Alert.alert('Access denied. You must be logged in to use this functionality');
            navigation.navigate("LoginScreen");
        }
        // Determine which emoji to show based on slider value
        //sliderState = 0 -> first icon/ sliderState = 1 -> last icon
        //ex: 0.5 * (4-1) = 1.5 -> math.round = 2 -> third emoji 
        const emojiKey = emojis[currentEmojiIndex]?.key; // Safely access key
        try{
           // const emojiKey = emojis[Math.round(sliderState * (emojis.length - 1))]?.key;
            console.log(token,emojiKey);
            const userEmoji = {token,emoji: emojiKey};
            const res = await
            axios
            .post('http://158.182.195.7:5001/submitEmoji', userEmoji) //answer nua
            if (res.status === 200 && res.status.data === "ok")
                Alert.alert('Success', 'Emoji submitted successfully');
                navigation.navigate("MainSurvey", { token: token, surveyType: emojiKey, selectedEmoji: emojiKey });
            }

        catch (error){
            Alert.alert('Error', 'Failed to submit emoji');
            console.error(error);
            }          
        }   
    
    return (
        <View style={styles.slideContainer}>
            <View style={{marginTop: 0, alignItems:'center'}}>
            <Text style={{fontSize: 30}}>HOW DO YOU FEEL</Text>
            <Text style={{fontSize: 30}}>RIGHT NOW?</Text>
            </View>
            <View style={styles.emojiContainer}>
                {/* Display the current image based on the slider value */}
                <Image source={currentEmoji} style={styles.emoji} />
            </View>
            <View style={styles.addText}>
                <Text>Slide to choose an icon</Text> 
            </View>
            <Slider
                style={styles.sliderEmoji} 
                value={sliderState}
                step={1}
                onValueChange={(value) => setSliderState(value)} // Change value from 0 to 3
                minimumValue={0}
                maximumValue={3}
                minimumTrackTintColor="#E6FDED"
                maximumTrackTintColor="#CBD5E1"
                thumbTintColor="green" // Set the thumb color to green
            />
            <View style={styles.dotsContainer}>
                {emojis.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === currentEmojiIndex ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>

            <View>
                <TouchableOpacity
                    style={styles.buttonSI}
                    onPress={handleEmoji}>
                    <Text style={styles.textBtn}>SUBMIT</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};
