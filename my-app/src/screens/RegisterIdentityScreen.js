import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function RegisterIdentityScreen({ navigation }) {
  const [ind, setInd] = useState(false);
  const [poc, setPoc] = useState(false);
  const [dis, setDis] = useState(false);
  const [lgb, setLgb] = useState(false);
  const [fem, setFem] = useState(false);
  const [newc, setNewc] = useState(false);
  const [none, setNone] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/identity.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={ind}
            onValueChange={setInd}
            color={ind ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Indigenous</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={poc}
            onValueChange={setPoc}
            color={poc ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>POC</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={dis}
            onValueChange={setDis}
            color={dis ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Person with disability</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={lgb}
            onValueChange={setLgb}
            color={lgb ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>LGBQT2S+</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={fem}
            onValueChange={setFem}
            color={fem ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Woman</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={newc}
            onValueChange={setNewc}
            color={newc ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Newcomer</Text>
        </View>
        <View style={styles.container}>
          <Checkbox
            style={styles.checkbox}
            value={none}
            onValueChange={setNone}
            color={none ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>None</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnSignup}
        onPress={() => navigation.navigate("registerBackground")}
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
    //marginBottom: "50%",
    //borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: "#CFCCCC",
  },

  btnSignup: {
    marginTop: 30,
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
});
