import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from "./Page/Login";
import Subscribe from "./Page/Subscribe";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import BadgesPage from "./Page/BadgesPage";

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false, animation: 'none'}}/>
            <Stack.Screen name="Subscribe" component={Subscribe} options={{headerShown: false, animation: 'none'}}/>
            <Stack.Screen name="BadgesPage" component={BadgesPage} options={{headerShown: false, animation: 'none'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});
