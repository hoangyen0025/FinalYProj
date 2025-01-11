import { View, Text } from 'react-native';
import styles from '../allstyle';
import { useState } from 'react';
import SurveyTable from '../survey/SurveyTable';
import { questionSurvey } from '../survey/surveyQuestion';

export default function MainSurvey({ route, navigation }) {
    const { surveyType, email, selectedEmoji } = route.params; // Extract selectedEmoji from the params
    console.log('Survey Type:', surveyType);
    console.log('Selected Emoji:', selectedEmoji); // Debugging line

    const [selectedIndex, setSelectedIndex] = useState(0);
    const questions = questionSurvey[surveyType]; // Get questions based on the survey type
    console.log(questions);
    
    if (!questions || questions.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No questions available for this survey type.</Text>
            </View>
        );
    }

    const noOfQuestions = questions.length;
    console.log(noOfQuestions); // Debugging line

    return (
        <View style={styles.container}>
            <SurveyTable
                total={noOfQuestions}
                selectedIndex={selectedIndex}
                onIndexChange={(index) => setSelectedIndex(index)} // Function to change index
                questions={questions} // Pass the question array
                selectedEmoji={selectedEmoji} // Pass the selected emoji to SurveyTable
                navigation={navigation} // Pass navigation prop to SurveyTable
            />
            {/* Optionally, you can add a submit response button if needed */}
        </View>
    );
}