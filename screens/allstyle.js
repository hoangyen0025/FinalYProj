import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', // Centers vertically
        fontFamily: 'monospace',
        
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 260,
        width: 260,
        marginTop: 30,
    },
    button: {
        width: 180,
        backgroundColor: '#E6FDED',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    //////////surveyTable
    sliderContainer: {
        backgroundColor:'#E6FDED',
        alignItems: 'center',
        justifyContent: 'flex-start', // Center vertically
        width: 300,
        height: 600,
        marginTop: 60,
        borderWidth: 1,
        borderColor:  '#C1C1C1',
        borderRadius: 30,
    },
    questionSlider: {
        padding: 10,
        marginBottom: 150
    },
    questionSliderTxt:{
        fontSize: 25,
        textAlign: 'center',
    },
    slider: {
        transform: [{ rotate: '-90deg' }], // Rotate slider to vertical
        height: 40, // Set a fixed height for the slider
        width: 300, // Set a width long enough for the slider
    },
    sliderFig: {
        fontSize: 40, 
        fontWeight: "bold", 
        left: 40, 
        bottom: 40
    },
    ///////all buttons
    btnContainer:{
        flexDirection: 'row', // Align buttons in a row
        justifyContent: 'space-between', // Space between buttons
        marginTop:100,
       // width: '80%', // Set a width to control button spacing
    },
    backBtn: {
        flex: 1, // Allow buttons to take equal space
        backgroundColor: '#E6FDED',
        paddingVertical: 15,
        borderRadius: 50,
        borderWidth: 1, 
        borderColor: '#52B774',
        marginHorizontal: 10, // Space between buttons
        width: 80,
    },
    nextBtn: {
        flex: 1, // Allow buttons to take equal space
        backgroundColor: '#52B774',
        paddingVertical: 20,
        borderRadius: 50,
        borderWidth: 1, 
        marginHorizontal: 10, // Space between buttons
        width: 200,
    },
    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    hpBtnContainer: {
        top: 100
    },
    homepageBtn: {
        width: 300,
        backgroundColor: '#E6FDED',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        borderWidth: 1, 
        margin: 10
      },
      homepageTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
      depressedIcon: {
        width: 150,
        height: 150, 
        top: 50         // Add margin to space it from the top
      },
      depressedIconCtn: {
        alignItems: 'center',
      },
      /////login adding 
      radioBtnContainer: {
       // display: 'flex',
       // flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
        top: 30
      },
      radioBtnInner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',
      },
      radioBtnTitle: {
        fontSize: 20,
        color: '#420475',
      },
      radioBtnText: {
        fontSize: 16,
        color: 'black',
    },
    /////slider icon 
    slideContainer : 
    {
        flex: 1,
        backgroundColor: '#52B774',
        alignItems: 'center',
        justifyContent: 'center', // Centers vertically
        fontFamily: 'monospace',
        
    },
    emojiContainer: {
        top: 10
    },
    emoji: {
        width: 400, 
        resizeMode: "contain",
    },
    sliderEmoji: {
        width: 200,
        height: 10,
    },
    addText: {
        marginVertical: 0 ,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'green',
    },
    inactiveDot: {
        backgroundColor: 'white',
    },
    buttonSI: {
        width: 180,
        backgroundColor: '#E6FDED',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 10  
    }
});
export default styles; // Ensure you are exporting the styles