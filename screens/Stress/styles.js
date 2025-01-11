import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        fontFamily: 'monospace',
        backgroundColor: 'white'
    },
    headerCtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#52B774',
        width: '120%',
        height: 80,
        borderRadius: 10,
    },
    headerWelcome:{
        fontSize: 15,
        textAlign: 'center',
        
    },
    userName: {
        fontSize: 20,
        color: 'black',
    },
    stressedIconCtn: {
        top: 50,
        alignItems: 'center',
      
    },
    stressedIcon: {
        width: 150,
        height: 150,
        },
    categoryContainer:{
        top: 80,
        alignItems: 'center'
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
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between' //space items bt 
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
        width: 150, 
        height: 150,
        borderRadius: 20,
        marginRight: 20,
        //objectFit: 'contain'
    },
    newsImage: {
        width: 100, 
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    newsCard: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between' ,//space items bt 
        padding: 0,
        marginRight: 90
    },
    newsTitle:{
        fontSize: 20
    },
    videoList: {
        marginBottom: 20
    },
    thumbnailVideo: {
        position: 'absolute',
        width: 140,
        height: 70
    },
    titleVideo: {
        fontSize: 15,
        paddingLeft: 150,
        fontWeight: 'bold',

    },
    videoInfo: {
        paddingLeft: 150,
        paddingTop: 0
    }

})
export default styles;