import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {useState} from 'react';
import styles from '../Depression/styles';
export default function AnxietySee(){
    const [inputSee, setInputSee] = useState('');
    return(
        <View style={styles.RSaction}>
        <Text style={styles.formTxt}>5 things you can see</Text>
        {/* <Icon name="mail" style={styles.icon} /> */}
        <TextInput
            placeholder="Email address"
            style={styles.textInput}
            value={inputSee}
            onChangeText={setInputSee}
        />  
    </View>
    )
}