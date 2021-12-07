import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Drawer from './src/navigation/CustomDrawer'

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'MainLayout'}
      >
        <Stack.Screen
          name="MainLayout"
          component={Drawer}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
