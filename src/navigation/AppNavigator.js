import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewsletterDetailScreen from '../screens/NewsletterDetailScreen';

import { COLORS, RADIUS } from '../utils/theme';
import useGameStore from '../store/gameStore';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabIcon({ emoji, label, focused }) {
  return (
    <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
      <Text style={[styles.tabEmoji, focused && styles.tabEmojiFocused]}>{emoji}</Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>{label}</Text>
    </View>
  );
}

function MainTabs() {
  const totalChallenges = useGameStore((s) => s.totalChallengesCompleted);
  const streak = useGameStore((s) => s.streak);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🏠" label="Inicio" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Challenges"
        component={ChallengesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="⚔️" label="Retos" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="📚" label="Biblioteca" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🏆" label="Perfil" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: COLORS.primary,
          background: COLORS.bg,
          card: COLORS.bgCard,
          text: COLORS.textPrimary,
          border: COLORS.border,
          notification: COLORS.primary,
        },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen
          name="NewsletterDetail"
          component={NewsletterDetailScreen}
          options={{ presentation: 'card' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.bgCard,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: RADIUS.md,
    minWidth: 60,
  },
  tabItemFocused: {
    backgroundColor: COLORS.primary + '20',
  },
  tabEmoji: { fontSize: 22, opacity: 0.5 },
  tabEmojiFocused: { opacity: 1 },
  tabLabel: {
    color: COLORS.textMuted,
    fontSize: 10,
    marginTop: 2,
    fontWeight: '500',
  },
  tabLabelFocused: {
    color: COLORS.primaryLight,
    fontWeight: '700',
  },
});
