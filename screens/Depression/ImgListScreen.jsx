import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import styles from '../Depression/styles';
export default function ImgListScreen ({navigation})  {
    const [MFNImg, setMFNImg] = useState([]);
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
            fetchMFNImg();
        }, []);
    return(
        <View style={styles.container}>
            <FlatList 
                data = {MFNImg}
                keyExtractor={(item) => item._id?.$oid || item.id || item.imgURL} // Provide a unique key for each item
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item.imgURL }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                )}
                numColumns={2} //set 2 img same row 
            />
        </View>
    );
}