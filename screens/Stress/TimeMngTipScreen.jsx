import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import {newsL} from './newsList';
import { tipMngL } from './timeMngList';
import {videoL} from './videoList';
export default function TimeMngTipScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <Text style ={styles.title}>
                    News
                </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("ImgListScreen")}>
                <Text style={styles.addition}>View more</Text>
            </TouchableOpacity>
            </View>
        <FlatList 
            data = {newsL}
            horizontal = {true}
            style = {{paddingLeft: 20}}
            renderItem={({item}) => (
                <View style={styles.newsCard}>
                    <Image 
                        source = {item.imgURL}
                        style = {styles.newsImage}
                        //resizeMode="contain" 
                    />
                    <Text style={styles.newsTitle}>{item.title}</Text>
                </View>
                
            )}
            showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      
        />
        <View style={styles.list}>
                <Text style={styles.title}>Image</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ImgListScreen")}>
                    <Text style={styles.addition}>View more</Text>
                </TouchableOpacity>    
        </View>
        <FlatList
                data = {tipMngL}
                horizontal = {true}
                style = {{paddingLeft: 20}}
                renderItem={({ item }) => (
                    <Image 
                        source={item.imgURL}
                        style={styles.image}
                    />
                )}
                showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      
            />
            <View style={styles.list}>
                <Text style={styles.title}>Video</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ImgListScreen")}>
                    <Text style={styles.addition}>View more</Text>
                </TouchableOpacity>    
            </View>
            <FlatList
                data = {videoL}
                horizontal = {false}
                renderItem={({ item }) => (

                    <View style={styles.videoList}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("MindfulnessExScreen")}>
                            <Image 
                                source={item.thumbnail}
                                style={styles.thumbnailVideo}
                            />
                            <Text style = {styles.titleVideo} numberOfLines={2} ellipsizeMode='tail'>{item.title}</Text>
                        <View style = {styles.videoInfo}>
                                <Text>{item.author}</Text>
                                <Text>{item.postedDate}</Text>
                        </View>
                       </TouchableOpacity>
                    </View>
                )}
                showsHorizontalScrollIndicator={false} // Disable the horizontal scroll indicator      
            />
    </View>
    )
}