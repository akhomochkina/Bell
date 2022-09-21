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

export default function EventsScreen() {
  return (
    <ImageBackground
      source={require("../assets/events.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <TextInput style={styles.searchBar} placeholder="Search">
        <MaterialCommunityIcons name="magnify" color="grey" size={25}>
          <Text style={styles.searchTxt}>
            {"    "}
            <> </>Search events near you
          </Text>
        </MaterialCommunityIcons>
      </TextInput>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    height: 40,
    marginTop: "23%",
    alignSelf: "center",
    paddingLeft: 10,
    borderColor: "grey",
    backgroundColor: "white",
  },
  searchTxt: {
    color: "#c0c2c2",
    fontSize: 18,
  },

  //   container: {
  //     flex: 1,
  //     flexDirection: "column",
  //     marginTop: "135%",
  //     marginBottom: 15,
  //     alignItems: "center",
  //   },

  bg: {
    height: "100%",
    width: "100%",
  },

  //   btnLogin: {
  //     marginRight: 40,
  //     marginLeft: 40,
  //     marginTop: 30,
  //     paddingTop: 10,
  //     paddingBottom: 10,
  //     backgroundColor: "#4DBAF6",
  //     borderRadius: 30,
  //     borderWidth: 1,
  //     borderColor: "#fff",
  //     width: "60%",
  //     height: 50,
  //   },

  //   btnSignup: {
  //     marginRight: 40,
  //     marginLeft: 40,
  //     marginTop: 30,
  //     paddingTop: 10,
  //     paddingBottom: 10,
  //     borderRadius: 30,
  //     borderWidth: 1,
  //     borderColor: "#4DBAF6",
  //     width: "60%",
  //     height: 50,
  //   },

  //   txt: {
  //     color: "#fff",
  //     textAlign: "center",
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //     marginTop: 4,
  //     fontWeight: "bold",
  //     fontSize: 16,
  //   },

  //   txtSignup: {
  //     color: "#4DBAF6",
  //     textAlign: "center",
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //     fontWeight: "bold",
  //     marginTop: 4,
  //     fontSize: 16,
  //   },
});
