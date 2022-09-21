import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function LanguagesScreen({ navigation }) {
  const [eng, setEng] = useState(false);
  const [fr, setFr] = useState(false);
  const [other, setOther] = useState(false);
  const [not, setNot] = useState(false);
  const [name, setName] = useState("");

  return (
    <ImageBackground
      source={require("../assets/lang.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={eng}
            onValueChange={setEng}
            color={eng ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>English</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={fr}
            onValueChange={setFr}
            color={fr ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>French</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={not}
            onValueChange={setNot}
            color={not ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>I prefer not to answer</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={other}
            onValueChange={setOther}
            color={other ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Another Language</Text>
        </View>
        <TextInput
          style={styles.txt}
          placeholder="Please Specify"
          placeholderTextColor={"gray"}
          onChangeText={setName}
          value={name}
        />
      </View>
      <TouchableOpacity
        style={styles.btnSignup}
        onPress={() => navigation.navigate("home")}
      >
        <Text style={styles.txtSignup}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    marginLeft: 30,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
  },

  bg: {
    height: "100%",
    width: "100%",
  },

  wrapper: {
    marginTop: "85%",

    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: "#CFCCCC",
  },

  btnSignup: {
    marginTop: 70,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#4DBAF6",
    borderColor: "#4DBAF6",
    width: "60%",
    height: 50,
    alignSelf: "center",
  },

  txtSignup: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
    fontSize: 16,
  },

  text: {
    lineHeight: 20,
    marginLeft: 10,
  },

  txt: {
    height: 40,
    width: "90%",
    marginLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#778AA2",
    padding: 10,
    textAlign: "left",
  },
});
