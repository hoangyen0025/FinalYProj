import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../../Anxiety/styles'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function AnxietyGround({navigation} ){
    return(
        <View style={styles.categoryContainer}>
        
            <TouchableOpacity
    
                style = {styles.categoryBtn}//??? if bg on press, change color 
                onPress={() => navigation.navigate("Anxiety Grounding - See")}>
                <View style={styles.contentContainer}>
                    <View style={styles.txtNumContainer}>
                        <Text style={styles.txtNum}>5</Text>
                    </View>
                <View style={styles.textContainer}>
        
                    <Text style={styles.categoryTxt}>things you</Text>
                    <Text style={styles.categoryTxt}>can see</Text>
                </View>
                <EvilIcons name="eye" size={90} color="black" />
            </View>
            </TouchableOpacity>
    <View>
        <TouchableOpacity
            style = {styles.categoryBtn}
            onPress={() => navigation.navigate()}>
                  <View style={styles.contentContainer}>
                    <View style={styles.txtNumContainer}>
                        <Text style={styles.txtNum}>4</Text>
                    </View>
                <View style={styles.textContainer}>
        
                    <Text style={styles.categoryTxt}>things you</Text>
                    <Text style={styles.categoryTxt}>can touch</Text>
                </View>
                <FontAwesome name="hand-stop-o" size={60} color="black" />
            </View>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity
            style = {styles.categoryBtn}
            onPress={() => navigation.navigate()}>
                 <View style={styles.contentContainer}>
                    <View style={styles.txtNumContainer}>
                        <Text style={styles.txtNum}>3</Text>
                    </View>
                <View style={styles.textContainer}>
        
                    <Text style={styles.categoryTxt}>things you</Text>
                    <Text style={styles.categoryTxt}>can hear</Text>
                </View>
                <Ionicons name="ear-outline" size={60} color="black" />
            </View>
            
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity
            style = {styles.categoryBtn}
            onPress={() => navigation.navigate()}>
                 <View style={styles.contentContainer}>
                    <View style={styles.txtNumContainer}>
                        <Text style={styles.txtNum}>2</Text>
                    </View>
                <View style={styles.textContainer}>
        
                    <Text style={styles.categoryTxt}>things you</Text>
                    <Text style={styles.categoryTxt}>can smell</Text>
                </View>
                <Ionicons name="ear-outline" size={60} color="black" />
            </View>
            
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity
            style = {styles.categoryBtn}
            onPress={() => navigation.navigate()}>
                 <View style={styles.contentContainer}>
                    <View style={styles.txtNumContainer}>
                        <Text style={styles.txtNum}>1</Text>
                    </View>
                <View style={styles.textContainer}>
        
                    <Text style={styles.categoryTxt}>thing you</Text>
                    <Text style={styles.categoryTxt}>can taste</Text>
                </View>
                <Ionicons name="ear-outline" size={60} color="black" />
            </View>
            
        </TouchableOpacity>
    </View>
</View>
    )
}