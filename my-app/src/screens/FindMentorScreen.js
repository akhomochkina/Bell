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

export default function FindMentorScreen() {
  return (
    <ImageBackground
      source={require("../assets/mentor.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <TextInput style={styles.searchBar} placeholder="Search">
        <MaterialCommunityIcons name="magnify" color="grey" size={25}>
          <Text style={styles.searchTxt}>
            {"    "}
            <> </>Search
          </Text>
        </MaterialCommunityIcons>
      </TextInput>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%",
  },

  searchBar: {
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    height: 40,
    marginTop: "60%",
    alignSelf: "center",
    paddingLeft: 10,
    borderColor: "grey",
    backgroundColor: "white",
  },

  searchTxt: {
    color: "#c0c2c2",
    fontSize: 18,
  },
});
