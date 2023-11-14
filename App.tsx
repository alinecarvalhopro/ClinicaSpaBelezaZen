import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from './src/Screens/SignIn/SignIn';
import {SignUp} from './src/Screens/SignUp/SignUp';
import {Home} from './src/Screens/Home/Home';
import {SplashScreen} from './src/Screens/SplashScreen/SplashScreen';
import { SpaMenu } from './src/Screens/SpaMenu/SpaMenu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SpaMenu" component={SpaMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
