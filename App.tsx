import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ProfileProvider} from './src/context/ProfileContext';
import AppNavigator from './src/navigation/AppNavigator';
export default function App(){return <SafeAreaProvider><ProfileProvider><StatusBar barStyle="light-content" backgroundColor="#101D35"/><AppNavigator/></ProfileProvider></SafeAreaProvider>}
