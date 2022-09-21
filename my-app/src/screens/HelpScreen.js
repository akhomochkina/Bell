import { ImageBackground, StyleSheet } from "react-native";

export default function HelpScreen() {
  return (
    <ImageBackground
      source={require("../assets/help.png")}
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
