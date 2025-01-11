import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from '../Depression/styles';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function MentalHealthSpScreen ({navigation})  {
    const [MHSupporters, setMHSupporters] = useState([]);
    const orgInfo=[
        {
            id: 1, 
            orgName: 'Hong Kong Mental Health Association',
            address: 'Po Kong Village Road, Wong Tai Sin, Hong Kong',
            phoneNum: '+852 2328 2880',
        },
        {
            id: 2, 
            orgName: 'Hong Kong Mental Health Association',
            address: 'Po Kong Village Road, Wong Tai Sin, Hong Kong',
            phoneNum: '+852 2328 2880',
        }
    ]
    // const profInfo = [
    //     {
    //         id: 1, 
    //         img: therapist1,
    //         name: 'Alice',
    //         jobPos: 'Therapist',
    //         exp: '2 years',
    //     },
    //     {
    //         id: 2, 
    //         img: therapist2,
    //         name: 'Helena',
    //         jobPos: 'Therapist',
    //         exp: '1 years',
    //     },
    //     {
    //         id: 3, 
    //         img: therapist3,
    //         name: 'Henry',
    //         jobPos: 'Therapist',
    //         exp: '4 years',
    //     },
    //     {
    //         id: 4, 
    //         img: therapist1,
    //         name: 'Alice',
    //         jobPos: 'Therapist',
    //         exp: '2 years',
    //     },
    //     {
    //         id: 5, 
    //         img: therapist2,
    //         name: 'Helena',
    //         jobPos: 'Therapist',
    //         exp: '1 years',
    //     },
    //     {
    //         id: 6, 
    //         img: therapist3,
    //         name: 'Henry',
    //         jobPos: 'Therapist',
    //         exp: '4 years',
    //     }

    // ]
    useEffect(() => {
        const fetchMHSupporters = async () => {
                    try {
                        const response = await axios.get('http://158.182.195.7:5001/getMHSupporters');
                        // console.log('Fetched images:', response.data); // Log the fetched data
                        // console.log('First item:', response.data[0]); // Log the first item to check its structure
            
                        // Check if the first item has the expected properties
                        if (response.data.length > 0) {
                            console.log('First item properties:', Object.keys(response.data[0]));
                        }
            
                        setMHSupporters(response.data);
                    } catch (err) {
                        console.error('Error in fetching image', err);
                    }
                };
        fetchMHSupporters();
    },[]);
    
    return(
        <View>
            {/* //emergency call  */}
            {/* <TouchableOpacity
                style = {styles.homepageBtn}//??? if bg on press, change color 
                onPress={() => navigation.navigate("MindfulnessExScreen")}>
                    <Text style={styles.homepageTxt}>Mindfulness Exercise </Text>
                    <MaterialCommunityIcons style ={styles.exerciseIcon} name="yoga" size={24} color="black" />
            </TouchableOpacity> */}
            
            <Text style={styles.title}>Organization</Text>
            <FlatList 
                data = {orgInfo}
                horizontal = {true}
                style = {{paddingLeft: 20}}
                renderItem={({item}) => (
                    <View style={styles.orgCard}>
                        <Text style={styles.orgName}>{item.orgName}</Text>
                        <Text style={styles.orgAddress}><Entypo name="location" size={18} color="grey" />: {item.address}</Text>
                        <Text style={styles.orgPhone}><Entypo name="phone" size={18} color="grey" />: {item.phoneNum}</Text>
                    </View>
                )}
                showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      
            />
             <Text style={styles.title}>Individual</Text>
             <FlatList
                data = {MHSupporters}
                horizontal = {false}
                style = {{paddingLeft: 20}}
                keyExtractor={(item) => item._id?.$oid || item.id || item.imageURL} // Provide a unique key for each item
                renderItem = {({item}) => (
                    <View style={styles.profCard}>
                        <View style={styles.rowContainer}>
                        <Image
                            source={item.imageURL}
                            style={styles.profImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.profName}>Dr. {item.name}</Text>
                            <Text style={styles.jobPos}>{item.jobPos}</Text>
                            <Text style={styles.exp}>{item.experience} experience</Text>
                        </View>
                    </View>
                </View>
                )
            }    
            showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      

                
                
            />
        </View>
    )
}