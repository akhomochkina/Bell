import {
  MaterialCommunityIcons,
  MaterialCommunityIcons as Icon,
} from "@expo/vector-icons";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
// import { Icon } from "react-native-vector-icons/core";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Home.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <Icon
        name="bell"
        color="#2F3954"
        size={25}
        style={{ marginTop: "27%", marginLeft: "85%" }}
      ></Icon>
      <TextInput style={styles.searchBar} placeholder="Search">
        <MaterialCommunityIcons name="magnify" color="grey" size={25}>
          <Text style={styles.searchTxt}>
            {"    "}
            <> </>Search
          </Text>
        </MaterialCommunityIcons>
      </TextInput>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => navigation.navigate("mentor")}
        >
          <Text style={styles.txtSignup}>Find Mentor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => navigation.navigate("group")}
        >
          <Text style={styles.txtSignup}>Join a Group</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView horizontal={true}>
        <TouchableOpacity
          style={styles.btnSignup}
          // onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.txtSignup}>Find Mentor</Text>
        </TouchableOpacity>
      </ScrollView> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    height: 40,
    marginTop: "24%",
    alignSelf: "center",
    paddingLeft: 10,
    borderColor: "grey",
    backgroundColor: "white",
  },
  searchTxt: {
    color: "#c0c2c2",
    fontSize: 18,
  },

  container: {
    flex: 1,
    // flexDirection: "column",
    marginTop: "3%",
    // marginBottom: 15,
    alignItems: "center",
  },

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

  btnSignup: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2F3954",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    height: 50,
  },

  //   txt: {
  //     color: "#fff",
  //     textAlign: "center",
  //     paddingLeft: 10,
  //     paddingRight: 10,
  //     marginTop: 4,
  //     fontWeight: "bold",
  //     fontSize: 16,
  //   },

  txtSignup: {
    color: "#EFEFEF",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 16,
  },
});
