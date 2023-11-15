import React from 'react';
import {Colors} from '../Styles/Theme/Colors/Colors';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SplashScreen} from '../Screens/SplashScreen/SplashScreen';
import {Home} from '../Screens/Home/Home';
import {SignIn} from '../Screens/SignIn/SignIn';
import {SignUp} from '../Screens/SignUp/SignUp';
import {SpaMenu} from '../Screens/SpaMenu/SpaMenu';
import {Update} from '../Screens/Update/Update';
import {Schedules} from '../Screens/Schedules/Schedules';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MenuTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.blue,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="SpaMenu"
        component={SpaMenu}
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="spa" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialIcons name="event-available" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Update"
        component={Update}
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="person" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={MenuTabs} />
      <Stack.Screen name="SpaMenu" component={SpaMenu} />
      <Stack.Screen name="Schedules" component={Schedules} />
    </Stack.Navigator>
  );
};
