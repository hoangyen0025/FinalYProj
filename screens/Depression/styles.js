 import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        fontFamily: 'monospace',
    },
    headerCtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#52B774',
        width: '100%',
        height: 80,
        //borderRadius,
        alignItems: 'flex-start', // Aligns items to the left
    },
    headerWelcome:{
        fontSize: 24,
        textAlign: 'left', // Aligns the text to the left
        padding: 20
    },
    userName: {
        fontSize: 24,
        color: 'black', 
     },
    depressedIconCtn: {
        top: 50,
        alignItems: 'center',
      }, 
    depressedIcon: {
    width: 150,
    height: 150,
    },
    categoryContainer: {
        alignItems: 'center',
        top: 80
    },
    categoryBtn: {
        width: 300,
        backgroundColor: '#E6FDED',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
        borderWidth: 1, 
        margin: 10,
        flexDirection: 'row',
       justifyContent: 'space-between' //space items bt 
    },
    categoryTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    musicIcon: {
        marginLeft: 10
    },
    podcastIcon: {
        marginLeft: 10
    },
    mentalhealthIcon: {
        marginLeft: 10
    },
    exerciseIcon: {
        marginLeft: 10
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between', //space items bt 
    },
    listVideo: {
        flexDirection: 'row',
        justifyContent: 'space-between', //space items bt 
        top: 0
    },
    title:{
        fontSize: 20,
        padding: 20,
    },
    addition:{
        fontSize: 20,
        padding: 20,
        color: '#52B774'
    },
    image: {
        width: 200, 
        height: 200,
        borderRadius: 20,
        marginRight: 20,
        
    },
    video: {
        width: '300',
        height: '200'
    },
    imageList: {
        width: 180, 
        height: 180,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    orgCard: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between', //space items bt 
        margin: 10
    },
    orgName: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    orgAddress:{
        paddingBottom: 10
    },
    rowContainer:{
        padding:0
    },
    profImage: {
        width: 120,
        height:120, 
    },
    profName: {
        paddingBottom: 20,
        fontSize:20
    },
    jobPos:{
        paddingBottom:5
    },
    exp: {
        paddingTop: 10
    },
    profCard: {
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 0,
        justifyContent: 'space-between', //space items bt 
        margin: 10
    },
    rowContainer: {
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center align vertically
    },
    textContainer: {
        flex: 1, // Allow text container to grow
        marginLeft: 10
    },
    videoList: {
        marginBottom: 30,
        paddingLeft: 20
    },
    ///video part
    vidContainer: {
        borderRadius: 10,
    },
    vidContainer: {
        margin: 10
    },
    vidFrame: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        margin: 1
    },
    thumbnailVid: {
        width: 200,
        height: 100,
        borderRadius: 5, // Optional: round corners
        
    }
    ,
    infoVidContainer: {
        marginLeft: 10,
        flex: 1,
    },
    titleVid: {
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    dateandAuthor:{
        marginBottom: 5
    }, 
    //music screen 
    sliderEmoji: {
        width: 200,
        height: 10,
        top: -200,
        // alignItems: 'center',
        // justifyContent: 'center',
        left: 100
    },
    playerContainer:{
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 5, 
        top : -180
    },
    playerIcon: {
        marginHorizontal: 15
    }
})
export default styles; 