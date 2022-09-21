import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreenNavigation from "./src/navigations/WelcomeScreenNavigation";
import HomeScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreenNavigation />
    </NavigationContainer>
    //<HomeScreen />
  );
}
