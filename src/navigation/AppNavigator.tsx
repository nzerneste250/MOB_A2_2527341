import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import { colors } from '../theme/colors';
import type { MainTabParamList, RootStackParamList } from '../types';

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs({ navigation }: { navigation: any }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarLabelStyle: { fontSize: 10 },
        tabBarIcon: ({ color, size, focused }) => {
          const icons: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
            Home: focused ? 'home' : 'home-outline',
            Skills: focused ? 'school' : 'school-outline',
            Projects: focused ? 'folder' : 'folder-outline',
            'Edit Profile': focused ? 'create' : 'create-outline',
            About: focused ? 'information-circle' : 'information-circle-outline',
          };
          return <Ionicons name={icons[route.name]} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="Projects">
        {() => <ProjectsScreen navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Edit Profile" component={EditProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.background }, headerTintColor: colors.text, contentStyle: { backgroundColor: colors.background } }}>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} options={{ title: 'Project Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
