
import React from "react";
import {useState} from 'react'; //adding more
import {Pressable, PressableProps, StyleSheet, View, Text, Alert, TextInput} from "react-native";
import Animated, {AnimatedProps, SharedValue, interpolateColor, useAnimatedStyle, useDerivedValue, withSpring} from "react-native-reanimated";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from '@react-navigation/native'; 
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
 const spacing = 8; //gap between two buttons
 const buttonHeight = 42;
 const dotContainer = 24;
 const dotSize = dotContainer /3;
 const activeDot = '#fff';
 const inactiveDot = '#aaa';
 const buttonWidth = 200;
 //Button({children, style, ...rest}: AnimatedProps<PressableProps>)//??? meaning
  function Button({children, style, ...rest}: AnimatedProps<PressableProps>){
      return (
         <AnimatedPressable style= {[{
             height: buttonHeight,
             borderRadius: buttonHeight / 2,
             justifyContent: 'center',
             alignItem: 'center',
             paddingHorizontal: spacing * 2,
         },style]} {...rest}>
             {children}
         </AnimatedPressable>
      );
 }
 function Dot({
     index, animation
 }:{
     index: number;
     animation: SharedValue<number>;
 })
     {
         //animation style for dot
     const styleAnimation = useAnimatedStyle(() =>{
         return{
             backgroundColor: interpolateColor(
                 animation.value,
                 [index - 1, index, index + 1],
                 [inactiveDot, activeDot, activeDot]
             ),
         };
     });
     return (
     <View style ={{
         width: dotContainer,  
         height: dotContainer,
        justifyContent: "center",
         alignItems: "center",
         }}>
         <Animated.View
             style = {[
                 styleAnimation,
                 {
                 width: dotSize,
                 height: dotSize,
                 borderRadius: dotSize,
             },
         ]}
         />
     </View>
     );
 }
 function PaginationIndicator({
     animation,
 } : {
     animation: SharedValue<number>;
 }){
     const styleAnimation = useAnimatedStyle(() => {
         return {
             width: dotContainer + dotContainer * animation.value,
         };
     });
     return (
     <Animated.View
         style ={[
             {
             backgroundColor: "#29BE56",
             height: dotContainer,
             width: dotContainer,
             borderRadius: dotContainer,
             position: "absolute",
             left: 0,
             top: 0,
         }, styleAnimation,
         ]}
     />
     );
 }
 //PAGINATION dot
 export function Pagination({
     selectedIndex,
     total,
     }:{
       selectedIndex: number;
       total: number;
     }){
     const animation = useDerivedValue(() => {
         //whenever the index is change, applies this function for animation in dots changing
         return withSpring(selectedIndex,{
             damping: 80,
             stiffness: 200,
         });
     }) ;
     return(
         <View style={{justifyContent: 'center', alignItems: 'center'}}>
             <View style ={{flexDirection: 'row'}}>
                 {/* pagination indicator */}
             <PaginationIndicator animation ={animation} />
             {[...Array(total).keys()].map((i) =>(
                 <Dot key = { `dot-${i}` } index = {i} animation={animation} />
             ))}
             </View>
         </View>
     );
 }


 export default function SurveyTable({
     total,
     selectedIndex,
     onIndexChange,
     //accept questions prop
     questions, 
     selectedEmoji,
     navigation
 } : {
     total: number;
     selectedIndex: number;
     onIndexChange: (index: number) => void; //onIndexChange function is a function that take argument named index as number and not return a value (void)
     questions: {questions: string; answers: string[]; }[]; //question is string, answer is string array 
     selectedEmoji: String
     navigation: NavigationProp<any>;
 }){
     //const email = route.params?.email; // Optional chaining to avoid error
     const [selectedAnswers,setSelectedAnswers] = useState(Array(questions.length).fill(null)); //store input answers with all undefined element (null) in newly created array 
     const [userInput, setUserInput] = useState(Array(questions.length).fill('')); // array for answer need input 
     // Check if questions are available and selectedIndex is valid
    if (!questions || questions.length === 0) {
         return <Text>No questions available.</Text>;
     }

     if (selectedIndex < 0 || selectedIndex >= questions.length) {
         return <Text>Invalid question index.</Text>;
     }

     const currentQuestion = questions[selectedIndex];

     // Check if the current question is defined
     if (!currentQuestion) {
         return <Text>No Question Available</Text>;
     }
     const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...selectedAnswers]; //create a copy of the current answers
        newAnswers[selectedIndex] = answer; //set the answer for the current question
        setSelectedAnswers(newAnswers); //update the state with new answers 
        if (questions[selectedIndex].answers.length === 0) { //test nhu
         Alert.alert("Please provide your input");
         //setUserInput('');//clear input for the next question 
        }
     };
     const handleInputChange = (text) => {
         const newInput = [...userInput];
         newInput[selectedIndex] = text;  //update the input for the current question 
         setUserInput(newInput);
         };
    
     //handle all completed answers 
     const handleSubmit = async () => { 
        //  const finalAnswers = [...selectedAnswers]; // create a new array as selected answers from user 
        //  if (questions[selectedIndex].answers.length === 0){ // for answers need user input 
        //      finalAnswers[selectedIndex] = userInput[selectedIndex]; // save user input 
        //  }
        const finalAnswers = selectedAnswers.map((answer) => {
            return {
                emoji: selectedEmoji, // Use the selected emoji here
                answers: [answer], // Adjust this based on your answer structure
            };
        });
         Alert.alert("Survey completed" + JSON.stringify(finalAnswers)); //show user selected answer 
       // Submit the final answers to the backend
       const token = await AsyncStorage.getItem('token'); // Get the token
       if (!token) {
                   Alert.alert('Access denied. You must be logged in to use this functionality');
               }

       try {
           const response = await axios.post('http://158.182.195.7:5001/submitAnswers', {
               token,
               answers: finalAnswers,
           });

          if (response.status === 200) {
               Alert.alert('Success', 'Survey completed successfully!');
               switch (selectedEmoji) {
                case 'depressedIcon':
                    navigation.navigate('DepressionHomepage');
                    break;
                case 'worriedIcon':
                    navigation.navigate('Worried Homepage');
                    break;
                case 'stressedIcon':
                    navigation.navigate('DepressionHomepage');
                    break;
                case 'happyIcon':
                    navigation.navigate('HappyHome');
                    break;
                default:
                    Alert.alert('Info', 'No specific homepage found for the selected emoji.');
                    break;
            }
              
           } else {
               Alert.alert('Error', 'Failed to submit responses.');
           }
       } catch (error) {
            console.error("Error submitting responses:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                Alert.alert('Error', error.response.data.message || 'An error occurred while submitting responses.');
            } else {
                Alert.alert('Error', 'An error occurred while submitting responses.');
            }
        }

       // Optionally navigate to another screen or reset state
       onIndexChange(selectedIndex + 1); // Move to the next question or finish
   };
     return(
         <View style={{padding: spacing, gap: spacing * 2 }}>
             {/* pagination */}
             <Pagination
             total ={total}
             selectedIndex={selectedIndex}
             />
             {/* //show questions */}
             {/* questions[selectedIndex].question: indicate current displayed question by its index  */}
             <Text>{questions[selectedIndex].questions}</Text> 
             {questions[selectedIndex].answers.length > 0 ? (
             <View>
                 {questions[selectedIndex].answers.map((answer, index) => (
                     <Button
                         key={index}
                         style={{backgroundColor: selectedAnswers[selectedIndex] === answer ? '#52B774' : 'lightgray',
                                 margin: 10,
                                 alignItems: 'center',
                         }}
                         onPress={() => handleAnswerSelect(answer)}
                     >
                         <Text style={{color: 'black'}}>{answer}</Text>
                     </Button>
                 ))}
             </View>
             ) : (
                 <TextInput
                     style = {{
                         height: 50,
                         borderColor: '#52B774',
                         borderWidth: 1,
                         borderRadius: 10

                     }}
                     placeholder = "Type your answer here"
                     value = {userInput[selectedIndex]} //use array to get the input 
                     onChangeText = {handleInputChange} //update input for the current question 
                 />
             )}
             <View style = {{flexDirection: 'row', gap: spacing }}>


                 {/* customized buttons  */}
                 {/* FIRST SLIDE: continue button to jump to next slide */}
                 {/* if index > 0  */}
                 {selectedIndex > 0 &&
                 //BACK button
                 (<Button
                     style={{backgroundColor: '#ddd',
                     }}
                     onPress={() => {
                         onIndexChange(selectedIndex - 1); //decreasing by 1
                 }}>
                     <Text>Back</Text>
                 </Button>
                 )}
                 {/* FINISH/CONTINUE BUTTON*/}


                 <Button
                     style={{backgroundColor: '#52B774',
                     flex: 1,
                     alignItems: 'center',
                     }}
                     onPress={() => {

                         if (selectedIndex === total - 1){ //last slide
                            handleSubmit(); //handle completed answers 
                         }
                         else{
                             //clear input if jump to next question 
                            // setUserInput(''); //reset input 
                            console.log("Selected answer is", selectedAnswers);
                             onIndexChange(selectedIndex +1); //not last slide -> increasing by 1

                         }
                      
                     }}
                     >


                     {/* if selectedIndex = 4 -> show finish button. If not show continue button  */}
                    {selectedIndex === total  - 1? (
                     <Text style={{color: '#ddd'}}>Finish</Text>
                    ):(
                    <Text style={{color: '#ddd'}}>Continue</Text>
                    )}
                 </Button>
             </View>
         </View>
     );
 }

