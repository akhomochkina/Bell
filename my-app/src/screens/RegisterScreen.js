import React, { useState } from "react";
import {
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  Text,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const gender = [
    { label: "Gender-fluid", value: "1" },
    { label: "Man", value: "2" },
    { label: "Woman", value: "3" },
    { label: "Trans man", value: "4" },
    { label: "Trans woman", value: "5" },
    { label: "Two-spirit ", value: "6" },
    { label: "Non-binary", value: "7" },
    { label: "Intersex", value: "8" },
    { label: "Other", value: "9" },
    { label: "I prefer not to answer ", value: "10" },
  ];

  const pronouns = [
    { label: "She/Her", value: "1" },
    { label: "He/Him", value: "2" },
    { label: "They/Them", value: "3" },
    { label: "She/They", value: "4" },
    { label: "He/She/They", value: "5" },
    { label: "Other", value: "6" },
    { label: "I prefer not to answer ", value: "7" },
  ];

  return (
    <DismissKeyboard>
      <ImageBackground
        source={require("../assets/register.png")}
        resizeMode="cover"
        style={styles.bg}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.txt}
            placeholder="Full Name"
            placeholderTextColor={"gray"}
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.txt}
            placeholder="Email"
            onChangeText={setEmail}
            placeholderTextColor={"gray"}
            value={email}
          />
          <TextInput
            style={styles.txt}
            placeholder="Phone Number"
            placeholderTextColor={"gray"}
            onChangeText={setPhone}
            value={phone}
            keyboardType="numeric"
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={gender}
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Gender identity" : "..."}
            searchPlaceholder="Search"
            value={value}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={pronouns}
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Pronouns" : "..."}
            searchPlaceholder="Search"
            value={value}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <TouchableOpacity
            style={styles.btnSignup}
            onPress={() => navigation.navigate("registerIdentify")}
          >
            <Text style={styles.txtSignup}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: "80%",
    alignItems: "left",
    marginLeft: 30,
  },

  bg: {
    height: "100%",
    width: "100%",
  },

  txt: {
    height: 40,
    width: "90%",

    borderBottomWidth: 1,
    borderBottomColor: "#778AA2",
    marginTop: 20,
    padding: 10,
    fontSize: 18,
    textAlign: "left",
  },

  dropdown: {
    marginTop: 30,
    height: 50,
    borderColor: "#778AA2",
    borderWidth: 0.8,
    borderRadius: 18,
    paddingHorizontal: 18,
    width: "90%",
  },

  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  btnSignup: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#4DBAF6",
    borderColor: "#4DBAF6",
    width: "60%",
    height: 50,
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
});
