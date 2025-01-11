    import {StyleSheet} from 'react-native';
    const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        top: 10,
    },
    categoryBtn: {
        width: 300,
        height: 120,
        backgroundColor: '#E6FDED',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 40,
        borderWidth: 1, 
        borderColor: 'gray',
        margin: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    contentContainer: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center items vertically in the row
        justifyContent: 'space-between', // Space between text and icon
        width: '100%', // Take full width
    },
    txtNumContainer: {
        left: 10
    },
    txtNum:{
        fontSize: 60
    },
    textContainer: {
        flexDirection: 'column', // Stack text in a column
        alignItems: 'flex-start', // Align text to the start
        left: 10
    },
    categoryTxt: {
        fontSize: 25,
        color: 'black',
        textAlign:'center'
    },
    icon: {
        justifyContent: 'center', // Center icon vertically
        alignItems: 'center', // Center icon horizontally
        marginTop: 10, // Optional: space between text and icon

    }
    })
    export default styles; 