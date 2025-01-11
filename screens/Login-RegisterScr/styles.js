import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        fontFamily: 'monospace',
    },
    logo: {
        height: 160,
        width: 160,
        marginTop: 10,
    },
    loginContainer:{
       top: 5
    },
     loginTxt:{
       fontSize:30,
    },
    action: {
       marginBottom: 8,
       top: 15,
    },
    formTxt: {
      fontSize: 15,
       marginBottom: 10,
    },
    icon: {
      fontSize: 20,
      marginHorizontal: 10,
      position: 'absolute',
      paddingVertical: 10,
      color: "#000"
    },
    textInput: {
        height: 44,
        paddingHorizontal: 40,
        borderRadius: 12, 
        fontSize: 15, 
        color: '#222',
        borderWidth: 1,
        borderColor: 'green',
        width: 300,
    },
    iconPw: {
       position: 'absolute', // Positioning the icon absolutely within the input container
       right: 10, // Position it to the right side of the input
       top: '50%', // Center vertically within the input
       transform: [{ translateY: -12 }], // Adjust for vertical centering
       color: "#aaa",
      },
      forgotPwtCtn: { 
         width: '100%', // Ensures it takes the full width of the parent  
         flexDirection: 'row', 
         justifyContent: 'flex-end' ,
         marginRight: 50,
         padding: 20
      },
      forgotPwTxt: {
         size: 15
      },
    button: {
        marginTop: 40,
        textAlign: 'center',
     },
    loginBtn: {
       width: 180,
       backgroundColor: '#52B774',
       paddingHorizontal: 15,
       paddingVertical: 15,
       borderRadius: 50,
    },
    textLoginBtn: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white',
       textAlign: 'center',
    },
    prompt:{
       flexDirection:'row', // Align items horizontally
       marginTop :210, 
    },
    txtPrompt:{
       color:'#52B774', // Change color to match your theme
       fontWeight:'bold', // Make it bold for emphasis
    },
    ////REGISTER SLIDE 
    RSaction: {
      marginBottom: 8,
      top: 5,
   },
   registerContainer:{
      top: 0
   },
   registerTxt:{
      fontSize:30,
   },
   Rbutton: {
      marginTop: 8,
      textAlign: 'center',
   },
   registerBtn: {
      width: 180,
      backgroundColor: '#52B774',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 50,
   },
   textRegisterBtn: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
   },
   registerPrompt:{
      flexDirection:'row', // Align items horizontally
      marginTop : 15, 
   },
   //profile screen 
   profImgContainer: {
      height: 160,
      width: 160,
      marginTop: 80,
      // borderRadius: 80, // Half of width/height for a circle
      // borderWidth: 4, // Thickness of the border
      // borderColor: 'black', // Color of the border
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden', // Ensures the image fits within the circle
  },
  profImg: {
      height: '100%', // Takes full height of the container
      width: '100%', // Takes full width of the container
      borderRadius: 80, // Ensures the image is also circular
  },
  editProfContainer: {
   height: 35,
   width: 35,
   backgroundColor:  '#52B774',
   borderRadius: 15,
   justifyContent: "center",
   alignItems: "center",
   marginTop: -22,
   marginLeft: 65
  },
  profName: {
   fontSize: 25,
   fontWeight: 'bold',
   marginTop: 10
  },
  infoEmailTxt: {
   fontSize: 13,
   color: '#b3b3b3',
   fontWeight: '500',
   marginLeft: 10
 },
 infoProfDetail: {
   marginBottom: 15,
   top: 20,
},
infoTxtEmail:{
   fontSize: 15,
   marginBottom: 10,
},
 infoEmailTxt: {
    height: 40,
    paddingHorizontal: 40,
    paddingVertical: 10, // Add vertical padding
    borderRadius: 5, 
    fontSize: 15, 
    color: '#222',
    borderWidth: 0.2,
    borderColor: 'gray',
    width:300,
    fontWeight: 'bold',
},
InfoGenderTxt: {
   height: 40,
   paddingHorizontal: 10,
   paddingVertical: 10, // Add vertical padding
   borderRadius: 5, 
   fontSize: 15, 
   color: '#222',
   borderWidth: 0.2,
   borderColor: 'gray',
   width:300,
   fontWeight: 'bold',
},
button: {
   marginTop: 50,
   textAlign: 'center',
},
iconExit: {
   marginRight: 0, // Space between the icon and text
},
logoutBtnContainer: {
   position: 'absolute',
   right: 0, 
   top: 0, 
   flexDirection: 'row', 
   padding: 10, 
   borderWidth: 2, 
   borderColor: 'gray', 
   borderRadius: 5, 
},
logoutBtn: {
   width: 80,
   paddingHorizontal: 0,
   paddingVertical: 0,
},
textLogoutBtn: {
   fontSize: 18,
   fontWeight: 'bold',
   color: '#000',
   textAlign: 'center',
},
//forgot pw 
handleForgotPwButton: {
   marginTop: 30,
   textAlign: 'center',
},
FPWprompt:{
   flexDirection:'row', // Align items horizontally
   marginTop :320, 
},
});
export default styles; // Ensureexporting the styles