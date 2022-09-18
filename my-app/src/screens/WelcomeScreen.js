import {
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => alert("Login Button Pressed")}
        >
          <Text style={styles.txt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.txtSignup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: "135%",
    marginBottom: 15,
    alignItems: "center",
  },

  bg: {
    height: "100%",
    width: "100%",
  },

  btnLogin: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#4DBAF6",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: "60%",
    height: 50,
  },

  btnSignup: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#4DBAF6",
    width: "60%",
    height: 50,
  },

  txt: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 16,
  },

  txtSignup: {
    color: "#4DBAF6",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 16,
  },
});
