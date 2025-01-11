import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../Depression/styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const worriedIcon = require('../img/worried.png')
export default function WorriedHomePage ({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.headerCtn}>
            <Text style={styles.headerWelcome}>
                Welcome, <Text style={styles.userName }>Yen</Text>
            </Text>
            </View>
            <View style={styles.depressedIconCtn}>
                <Image 
                    style={styles.depressedIcon} 
                    source={worriedIcon}
                />
            </View>
        <View style={styles.categoryContainer}>
            <View>
                <TouchableOpacity
                    style = {styles.categoryBtn}//??? if bg on press, change color 
                    onPress={() => navigation.navigate("Anxiety Grounding")}>
                        <Text style={styles.categoryTxt}>Anxiety Grounding</Text>
                        <FontAwesome name="pencil-square-o" size={24} color="black" />
                </TouchableOpacity>
            </View>
        <View>
            {/* find the way */}
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("RelaxationMusicScreen")}>
                    <Text style={styles.categoryTxt}>Nature Sound</Text>
                    <FontAwesome name="tree" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {/* <View>
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("PodcastScreen")}>
                    <Text style={styles.categoryTxt}>Podcast</Text>
                    <FontAwesome style ={styles.podcastIcon} name="podcast" size={24} color="black" />
            </TouchableOpacity>
        </View> */}
        <View>
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("Mental Health Support")}>
                    <Text style={styles.categoryTxt}>Mental Health Support </Text>
                    <MaterialIcons style ={styles.mentalhealthIcon} name="health-and-safety" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
    </View>
    );
};
