import { View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const profileImg = require("../img/profile.jpg");
export default function ProfileScreen({navigation})  {
    const [userData, setUserData] = useState('');
    async function handleLogout(){}
    async function getUserData(){
        try{
         //use async storage to get token to get user data from dtb
         const token = await AsyncStorage.getItem('token');

         console.log(token);
         const response = await axios.post("http://158.182.195.7:5001/userData", {token:token});
         console.log("User data", response.data); //to get all user data 
         setUserData(response.data.data);
        }
        catch (error){
            console.error("Error fetching user data", error); 
        }
    }
    useEffect(()  => {
        getUserData()},[]);
    return(
        <View style={styles.container}>
            {/* <View style={styles.logoutBtnContainer}>
                <TouchableOpacity 
                    style={styles.logoutBtn}
                    onPress={handleLogout}>
                    {/* <MaterialCommunityIcons
                        name = "exit-to-app"
                        size = {18}
                        style = {styles.iconExit}
                    /> */}
                    {/* <View>
                        <Text style={styles.textLogoutBtn}>Sign out</Text>
                    </View> 
                </TouchableOpacity>
            </View> */}
            <View style={styles.profImgContainer}>
                <Image source={profileImg} style= {styles.profImg}></Image>
                {/* <TouchableOpacity style={styles.editProfContainer}>
                    <Feather name={"edit-3"} size={20} color="#fff"/>
                </TouchableOpacity> */}
            </View>
            {/* profile detail container */}
            <View>
                <Text style={styles.profName}>
                    {userData.name}
                </Text>
            </View>
            {/* <View style={styles.infoProfDetail}>
                <Text style={styles.infoEmailTxt}>Email</Text>
            </View> */}
            <View style={styles.infoProfDetail}>
                <Text style={styles.formTxt}>Your email:</Text>
                <View style={styles.formInput}>
                <MaterialCommunityIcons 
                name="email"
                size= {20}
                style={styles.icon}
                />
                 <Text style={styles.infoEmailTxt}>{userData.email}</Text>
            </View> 
            <View style={styles.infoProfDetail}>
            <Text style={styles.formTxt}>Phone number: </Text>
            <View style={styles.formInput}>
                <Entypo name="phone" 
                size={24} 
                style={styles.icon} />
                <Text style={styles.infoEmailTxt}>{userData.phoneNum}</Text>
            </View>
            </View>
            {/* gender: NOT NESSCESSary  */}
            {/* <View style={styles.infoProfDetail}>
            <Text style={styles.formTxt}>Gender: </Text>
            <View style={styles.formInput}>
                <Text style={styles.InfoGenderTxt}>Male</Text>
            </View>
            </View> */}
             <View style={{left: 70, top: 30}}>
                <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate("SlideIcons")}>
                    <View>
                        <Text style={styles.textLoginBtn}>CHOOSE YOUR EMOTION!</Text>
                    </View>
                </TouchableOpacity>
             </View>
        </View>
    </View>
    )
};