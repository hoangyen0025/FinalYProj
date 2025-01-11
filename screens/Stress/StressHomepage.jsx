import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const stressedIcon = require('./img/stressed.png');
export default function StressHomepage ({navigation}) {
    return(
        <View style = {styles.container}>
            <View style = {styles.headerCtn}>
            <Text style={styles.headerWelcome}>
                Welcome, <Text style={styles.userName }>Yen</Text>
            </Text>
            </View>
            <View style={styles.stressedIconCtn}>
                <Image 
                    style={styles.stressedIcon} 
                    source={stressedIcon}
                />
            </View>
            <View style={styles.categoryContainer}>
            <View>
                <TouchableOpacity
                    style = {styles.categoryBtn}//??? if bg on press, change color 
                    onPress={() => navigation.navigate("StressMngScreen")}>
                        <Text style={styles.categoryTxt}>Stress Management</Text>
                        <MaterialCommunityIcons style ={styles.exerciseIcon} name="yoga" size={24} color="black" />
                </TouchableOpacity>
            </View>
        <View>
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("TimeMngTipScreen")}>
                    <Text style={styles.categoryTxt}>Time management tips</Text>
                    <Feather style ={styles.musicIcon} name="music" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("PodcastScreen")}>
                    <Text style={styles.categoryTxt}>Podcast</Text>
                    <FontAwesome style ={styles.podcastIcon} name="podcast" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity
                style = {styles.categoryBtn}
                onPress={() => navigation.navigate("MentalHealthSpScreen")}>
                    <Text style={styles.categoryTxt}>Mental Health Support </Text>
                    <MaterialIcons style ={styles.mentalhealthIcon} name="health-and-safety" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
        </View>
    )

}