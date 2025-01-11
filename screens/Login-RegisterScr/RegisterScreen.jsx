import React from 'react';
import { View, Text, Image,TextInput, TouchableOpacity, Alert } from 'react-native';
import {useState} from 'react';
import axios from 'axios'; //a lib to make http requests
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
//import Icon from 'react-native-vector-icons/Ionicons'; // You can choose any icon set
import styles from './styles';

const logoImg = require("../img/logo.png");
export default function RegisterScreen({navigation}) {
//useState: initialize as an empty string ('')
//const[name, setName] 
//1st element is assigned to name 
//2nd element (function to update the state): assigned to setName 
const [name, setName] = useState('');
const [phoneNum, setPhoneNum] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState(''); //password 
const [showPassword, setShowPassword] = useState(false);
const [cfPassword, setcfPassword] = useState(''); //confirm password 
const [showcfPassword, setShowcfPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

  //const [code, setCode] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowcfPassword = () => {
    setShowcfPassword(!showcfPassword);
  }
  async function handleSubmit(){
    try{
      const user ={
        email,
        password,
        cfPassword,
        name,
        phoneNum
      };
      //declare a var "res" to store response from the POST request
      //await: wait until the HTTP request to complete
      const res =  await 
    axios
    .post('http://158.182.195.7:5001/register', user) //ipconfig: ipv4 address
      console.log(res.data);
      if (res.status === 201 && res.data.status === "ok"){//successfully login 
        Alert.alert("Register successfully!")//if success show the alert 
        setErrorMessage(''); //no error message
        // Clear inputs 
        setName('');
        setEmail('');
        setPassword('');
        setcfPassword('');
        setPhoneNum('');
        navigation.navigate("Login");
    }}
    
  catch(error){
    if (error.response){
      setErrorMessage(error.response.data.data); //set error message from backend
      Alert.alert("Error", error.response.data.data); // Show error in alert
      console.error(error.response.data); // Log error response for
    }else{
      setErrorMessage('An unexpected error occured');
      console.error(error); // Log unexpected errors 
    }
  }
}
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />

    <View style={styles.registerContainer}>
        <Text style={styles.registerTxt}>REGISTER</Text>
    </View>

    {/* user or admin type  }
     {/* <View style={styles.radioBtnContainer}>
        <Text style={styles.radioBtnTitle}>Login as:</Text>
        <View style={styles.radioBtnInner}>
            <RadioButton
                value="user"
                status={userType === 'user' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('user')}
            />
            <Text style={styles.radioBtnText}>User</Text>

            <RadioButton
                value="admin"
                status={userType === 'admin' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('admin')}
            />
            <Text style={styles.radioBtnText}>Admin</Text>
        </View>
    </View> 
    {/* if they click admin -> it will show the code box  }
    {userType == 'admin' ? (
            <View style={styles.action}>
              <TextInput
                name="user-o"
                color="#420475"
                style={styles.smallIcon}
              />
              <Text style={styles.radioBtnText}>Code</Text>
              <TextInput
                placeholder="Code"
                style={styles.textInput}
                onChangeText={setCode} 
              />
            </View>
          ) : (
            ''
          )} */}

  
    <View style={styles.RSaction}>
        <Text style={styles.formTxt}>Email address:</Text>
        {/* <Icon name="mail" style={styles.icon} /> */}
        <View style={styles.formInput}>
        <MaterialCommunityIcons 
          name="email"
          size= {24}
          style={styles.icon}
          />
        <TextInput
            placeholder="Email address"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
        />
    </View>
    </View>

    <View style={styles.RSaction}>
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
    
    <View style={styles.RSaction}>
      <View>
          <Text style={styles.formTxt}>Confirm password :</Text>
      </View>
      <View style={styles.formInput}>
      <MaterialCommunityIcons 
          name="lock"
          size= {24}
          style={styles.icon}
          />
        <TextInput placeholder="Confirm password"
         secureTextEntry={!showcfPassword} //show or hide pw icon
         style={styles.textInput}
         value={cfPassword}
         onChangeText={setcfPassword} //update pw
        />
        <MaterialCommunityIcons
              name={showcfPassword ? 'eye-off' : 'eye'}
              size ={24}
              style={styles.iconPw}
              onPress={toggleShowcfPassword}
          />
      </View>
    </View>
    
    <View style={styles.RSaction}>
          <Text style={styles.formTxt}>Full name:</Text>
        <View style={styles.formInput}>
          <MaterialCommunityIcons 
            name="head"
            size= {24}
            style={styles.icon}
            />
          <TextInput
              placeholder="CHAN Tai Man"
              style={styles.textInput}
              value={name}
              onChangeText={setName}
          />
      </View>
    </View>
    <View style={styles.RSaction}>
        <Text style={styles.formTxt}>Phone number:</Text>
        {/* <Icon name="mail" style={styles.icon} /> */}
        <View style={styles.formInput}>
        <Entypo name="phone" 
                size={24} 
                style={styles.icon} />
        <TextInput
            placeholder="94304934"
            style={styles.textInput}
            value={phoneNum}
            onChangeText={setPhoneNum}
        />
    </View>
    </View>

    <View style={styles.Rbutton}>
        <TouchableOpacity 
        style={styles.registerBtn}
        onPress={handleSubmit}> 
          <View>
            <Text style={styles.textRegisterBtn}>REGISTER</Text>
          </View>
      </TouchableOpacity>
      </View>


    <View style={styles.registerPrompt}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.txtPrompt}> Log in</Text>
        </TouchableOpacity>
    </View>
</View>
);
}
