import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/Home/HomeScreen';
import Onboarding1 from '../screens/Onboarding/OnboardingScreen1';
import Onboarding2 from '../screens/Onboarding/OnboardingScreen2';
import Onboarding3 from '../screens/Onboarding/OnboardingScreen3';

const Stack = createStackNavigator();

export default function OnboardingNavigator() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false,...TransitionPresets.SlideFromRightIOS, }}>
      <Stack.Screen  name="Onboarding1" component={Onboarding1} />
      <Stack.Screen  name="Onboarding2" component={Onboarding2} />
      <Stack.Screen  name="Onboarding3" component={Onboarding3} />
      <Stack.Screen  name="Home" component={HomeScreen} />
    </Stack.Navigator>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Onboarding1">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Onboarding1" component={Onboarding1} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

