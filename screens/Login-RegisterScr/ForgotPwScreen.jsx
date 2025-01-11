import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const logoImg = require("../img/logo.png");
export default function ForgotPwScreen({navigation}) {
    async function handleForgotPw(){}
     const[email,setEmail] = useState(''); //setEmail will update email from user 
    return(
        <View style={styles.container}>
             <Image 
          style={styles.logo}
          source={logoImg}
        />
        <View style={styles.loginContainer}>
            <Text style={styles.loginTxt}>FORGOT PASSWORD</Text>
        </View>
        <View style={styles.action}>
            <Text style={styles.formTxt}>Email address:</Text>
            <View style={styles.formInput}>
                <MaterialCommunityIcons 
                name="email"
                size= {24}
                style={styles.icon}
                />
                <TextInput 
                placeholder="Your email address" 
                style={styles.textInput} 
                value = {email}
                onChangeText={setEmail} //update email
                />
            </View> 
       </View>
       <View style={styles.handleForgotPwButton}>
        <TouchableOpacity 
        style={styles.loginBtn}
        onPress={handleForgotPw}>
          <View>
            <Text style={styles.textLoginBtn}>SUBMIT</Text>
          </View>
      </TouchableOpacity>
      </View>

      <View style={styles.FPWprompt}>
        <Text>Do not have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.txtPrompt}> Register here </Text>
        </TouchableOpacity>
      </View>

     </View>
    );
};