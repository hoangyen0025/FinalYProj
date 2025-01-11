import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/Login-RegisterScr/LoginScreen';
import RegisterScreen from './screens/Login-RegisterScr/RegisterScreen';
import SlideIcons from './screens/SlideIcons';
import MainSurvey from './screens/survey/MainSurvey';
import SurveyTable from './screens/survey/SurveyTable';
import DepressionHomepage from './screens/Depression/DepressionHomepage';
import MindfulnessExScreen from './screens/Depression/MindfulnessExScreen';
import ImgListScreen from './screens/Depression/ImgListScreen';
import MentalHealthSpScreen from './screens/Depression/MentalHealthSpScreen';
import StressHomepage from './screens/Stress/StressHomepage';
import TimeMngTipScreen from './screens/Stress/TimeMngTipScreen';
import ProfileScreen from './screens/Login-RegisterScr/ProfileScreen';
import ForgotPwScreen from './screens/Login-RegisterScr/ForgotPwScreen'
import VideoScreen from './screens/Depression/VideoScreen';
import MusicScreen from './screens/Depression/MusicScreen';
import FlipQuoteScreen from './screens/Depression/FlipQuoteScreen';
import AnxietyGrounding from './screens/Worry/AnxietyGrounding';
import VideoPlayer from './screens/Depression/VideoPlayer';
import WorriedHomePage from './screens/Worry/WorriedHomePage';
import AnxietySee from './screens/Worry/AnxietySee';
export default function App() {
  const Stack = createNativeStackNavigator();
  const TabNav = createBottomTabNavigator();
   function Tabs(){
     return (
       <TabNav.Navigator>
         <TabNav.Screen name = "Profile" component={ProfileScreen} />
         {/* <TabNav.Screen name = "SlideIcons" component={SlideIcons} /> */}
       </TabNav.Navigator>
     );
   }
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SlideIcons" component={SlideIcons} />
        <Stack.Screen name="MainSurvey" component={MainSurvey} /> 
        <Stack.Screen name="SurveyTable" component={SurveyTable} /> 
        <Stack.Screen name="DepressionHomepage" component={DepressionHomepage} />
        <Stack.Screen name="MindfulnessExScreen" component={MindfulnessExScreen} />
        <Stack.Screen name="ImgListScreen" component={ImgListScreen} />
        <Stack.Screen name="Mental Health Support" component={MentalHealthSpScreen} />
        <Stack.Screen name="StressHomepage" component={StressHomepage} />
        <Stack.Screen name="TimeMngTipScreen" component={TimeMngTipScreen} />
         <Stack.Screen name="Tabs" component={Tabs} /> 
        {/* testing video screen */}
        <Stack.Screen name="Video Details" component={VideoScreen} /> 
        <Stack.Screen name="Video Play" component={VideoPlayer} />

        {/* <Stack.Screen name="MusicScreen" component={MusicScreen} />  */}
        <Stack.Screen name="Quote" component={FlipQuoteScreen} />
        <Stack.Screen name="Anxiety Grounding" component={AnxietyGrounding} />
        <Stack.Screen name="Worried Homepage" component={WorriedHomePage} />
        <Stack.Screen name="Anxiety Grounding - See" component={AnxietySee} />

      </Stack.Navigator>
   </NavigationContainer>
  );
}
// //navigator screen before login success
//  const LoginNavigator = () => {
//    const Stack = createNativeStackNavigator(); //to transit between screens
//      return (a
//        //screen before login and also not show header for these screen
//          <Stack.Navigator
//              screenOptions={{
//                headerShow: false, // not show header
//              }}>
//              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
//              <Stack.Screen name="LoginScreen" component={LoginScreen} />
//              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

//            </Stack.Navigator>
//      );
//    };

