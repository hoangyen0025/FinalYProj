import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


const logoImg = require("../img/logo.png");
export default function LoginScreen({navigation}) {
  const[email,setEmail] = useState(''); //setEmail will update email from user 
  const[password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  async function handleSubmit(){
    try{
    console.log(email,password) //debug
    const user = {email,password};
    const res = await 
    axios
    .post("http://158.182.195.7:5001/login",user)
    //.then(res=>console.log(res.data));//create a token after user successfully login
    console.log(res.data); //print user data 
    //login successfully
    if (res.status === 201 && res.data.status == "ok"){
      Alert.alert("Successfully logged in!")
      //JSON.stringify(res.data.data);//print token
      AsyncStorage.setItem("token",res.data.data);//store the token
      AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));//
      navigation.navigate('Tabs', { screen: 'ProfileScreen' });//navigate to the prof screen and pass the email as a parameter.
    }

  }catch(error){
    if(error.response){
      setErrorMessage(error.response.data.data); //set error message from backend
      Alert.alert("Error", error.response.data.data); // Show error in alert
      console.error(error.response.data); // Log error response 
    }
    else{
      setErrorMessage('An unexpected error occured');
      console.error(error); // Log unexpected errors 
    }
  }
}
  return (
    <View style={styles.container}>
       <Image 
          style={styles.logo}
          source={logoImg}
        />

      <View style={styles.loginContainer}>
        <Text style={styles.loginTxt}>LOG IN</Text>
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
        placeholder="Email address" 
        style={styles.textInput} 
        value = {email}
        onChangeText={setEmail} //update email
        />
      </View> 
      </View>

      <View style={styles.action}> 
      <Text style={styles.formTxt}>Password:</Text>
  
      <View style={styles.formInput}>
        <MaterialCommunityIcons 
            name="lock"
            size= {24}
            style={styles.icon}
            />
          <TextInput placeholder="Password"
          secureTextEntry={!showPassword} //show or hide pw icon
          style={styles.textInput}
          value={password}
          onChangeText={setPassword} //update pw
          />
          <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size ={24}
                style={styles.iconPw}
                onPress={toggleShowPassword}
            />
      </View>
    </View>
    {/* <View style={styles.forgotPwtCtn}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPwScreen")}>
        <Text style={styles.forgotPwTxt}> Forgot password?</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.button}>
        <TouchableOpacity 
        style={styles.loginBtn}
        onPress={handleSubmit}>
          <View>
            <Text style={styles.textLoginBtn}>LOG IN</Text>
          </View>
      </TouchableOpacity>
      </View>


      <View style={styles.prompt}>
        <Text>Do not have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.txtPrompt}> Register here </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
