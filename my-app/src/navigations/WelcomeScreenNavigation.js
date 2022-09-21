import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import LanguagesScreen from "../screens/LanguagesScreen";
import RegisterBackgroundScreen from "../screens/RegisterBackgroundScreen";
import RegisterIdentityScreen from "../screens/RegisterIdentityScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeNav from "./MainPageNavigation";
import HomeNavigation from "./MainPageNavigation";
import MainScreenNavigation from "./MainPageNavigation";

const Stack = createNativeStackNavigator();

//all the navigation for the app
const WelcomeScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          title: "Back",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          title: "Back",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registerIdentify"
        component={RegisterIdentityScreen}
        options={{
          title: "Back",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registerBackground"
        component={RegisterBackgroundScreen}
        options={{
          title: "Back",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="languages"
        component={LanguagesScreen}
        options={{
          title: "Back",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeNav}
        options={{
          headerTitle: "",
          headerShown: false,
          headerTransparent: true,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeScreenNavigation;
