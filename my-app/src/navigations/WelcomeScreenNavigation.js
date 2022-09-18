import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguagesScreen from "../screens/LanguagesScreen";
import RegisterBackgroundScreen from "../screens/RegisterBackgroundScreen";
import RegisterIdentityScreen from "../screens/RegisterIdentityScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

//all the navigation for the app
const WelcomeScreenNavigation = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default WelcomeScreenNavigation;
