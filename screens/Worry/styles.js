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
     worriedIconCtn: {
        top: 50,
        alignItems: 'center',
      }, 
    worriedIcon: {
    width: 150,
    height: 150,
    },
})
export default styles; 