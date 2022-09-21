import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/MainScreen";
import HelpScreen from "../screens/HelpScreen";
import MessagesScreen from "../screens/MessagesScreen";
import EventsScreen from "../screens/EventsScreen";
import LanguagesScreen from "../screens/LanguagesScreen";
import AccountScreen from "../screens/AccountScreen";
import { NavigationEvents } from "react-navigation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="hs"
      backBehavior="none"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 90, padding: 8 },
        tabBarActiveTintColor: "#2E3C6F",
        tabBarIconStyle: { height: 10 },
        gestureEnabled: false,
      }}
    >
      <Tab.Screen
        name="event"
        initialRouteName="hs"
        component={EventsScreen}
        options={{
          tabBarLabel: "Events",

          tabBarLabelStyle: { marginTop: 4 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={35}
            />
          ),
        }}
      />

      <Tab.Screen
        name="help"
        component={HelpScreen}
        options={{
          tabBarLabel: "Find Help",
          tabBarLabelStyle: { marginTop: 4 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="charity" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="hs"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          backBehavior: "none",
          tabBarLabelStyle: { marginTop: 4 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="msg"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarLabelStyle: { marginTop: 4 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="accnt"
        component={AccountScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarLabelStyle: { marginTop: 4 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} backBehavior="none">
      <Stack.Screen
        backBehavior="none"
        name="Home"
        component={HomeNavigation}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
