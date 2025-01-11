import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
const logoImg = require("./img/logo.png")  
export default function WelcomeScreen({navigation}) {
  return(
    <View style={stylesWS.container}>
        <Image 
          style={stylesWS.logo}
          source={logoImg}
        />

       <Text style={stylesWS.txtWelcome}>WELCOME TO</Text>
       <Text style={stylesWS.txtBrand}>EMOTIVERSE</Text>
       
      <View style={stylesWS.buttonContainer}>

        {/* login button */}
        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("Login")}>
            <View>
              <Text style={stylesWS.textBtn}>LOG IN</Text>
            </View>
        </TouchableOpacity>
        
        {/* register button */}
        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("Register")}>
            <View>
              <Text style={stylesWS.textBtn}>REGISTER</Text>
            </View>
        </TouchableOpacity>
        
         {/* Slides Icon
        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("SlideIcons")}>
            <View>
              <Text style={stylesWS.textBtn}>SLIDES</Text>
            </View>
        </TouchableOpacity>

        {/* happy survey tes
        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("DepressionHomepage")}>
            <View>
              <Text style={stylesWS.textBtn}>DEP</Text>
            </View>
        </TouchableOpacity>

        {/* depression hp test}
         <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("StressHomepage")}>
            <View>
              <Text style={stylesWS.textBtn}>STR</Text>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("VideoScreen")}>
            <View>
              <Text style={stylesWS.textBtn}>VID</Text>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("AnxietyGrounding")}>
            <View>
              <Text style={stylesWS.textBtn}>ANX</Text>
            </View>
        </TouchableOpacity>  */}

        {/* survey for test */}
        {/* <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("MainSurvey")}>
            <View>
              <Text style={stylesWS.textBtn}>SUR</Text>
            </View>
        </TouchableOpacity>  */}

      {/* <TouchableOpacity 
          style={stylesWS.button}
          onPress={() => navigation.navigate("ProfileScreen")}>
            <View>
              <Text style={stylesWS.textBtn}>PROF</Text>
            </View>
        </TouchableOpacity>  */}
      </View>
    </View>
  )
}

 const stylesWS = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     fontFamily: 'monospace',
 },
  logo: {
    width: 150,
    height: 150,
    marginTop: 200,               // Add margin to space it from the top
  },
  txtWelcome:{
    fontSize:30,
  },
  txtBrand:{
    fontSize: 50
  },
  buttonContainer: {
    flexDirection: 'row', //btn in a row
    marginTop:10,
    width: '80%', 
  },
  button: {
    flex: 1, // Allow btn have equal space
    backgroundColor: '#52B774',
    paddingVertical: 15,
    borderRadius: 50,
    marginHorizontal: 10, // Space between buttons
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
