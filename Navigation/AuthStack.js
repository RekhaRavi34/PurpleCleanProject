
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../Screens/OnboardingScreen'
import OtpSignUp from '../Screens/OtpSignUp'
import OtpVerify from '../Screens/OtpVerify'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useState, useEffect} from 'react';

const Stack=createNativeStackNavigator()
const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'OtpSignUp';
  }

  return (
    <Stack.Navigator 
    initialRouteName={routeName} 
    screenOptions={{headerShown:false}}>
      
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="OtpSignUp"
        component={OtpSignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;