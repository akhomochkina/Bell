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

export default function GroupsScreen() {
  return (
    <ImageBackground
      source={require("../assets/groups.png")}
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
