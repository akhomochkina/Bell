import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

export default function MessagesScreen() {
  return (
    <ImageBackground
      source={require("../assets/msg.png")}
      resizeMode="cover"
      style={styles.bg}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%",
  },
});
