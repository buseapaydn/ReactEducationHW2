import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, Text } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options= {{ headerBackTitleVisible:false, title: '' }} name="DetailScreen" component={DetailScreen}  />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}