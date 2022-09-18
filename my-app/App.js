import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreenNavigation from "./src/navigations/WelcomeScreenNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreenNavigation />
    </NavigationContainer>
  );
}
