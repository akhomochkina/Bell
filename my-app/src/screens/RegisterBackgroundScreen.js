import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function RegisterBackgroundScreen({ navigation }) {
  const initialState = {
    Arab: false,
    Black: false,
    Chinese: false,
    Filipino: false,
    Japanese: false,
    Korean: false,
    LatinAmerican: false,
    SouthAsian: false,
    SoutheastAsian: false,
    WestAsian: false,
    White: false,
    notListed: false,
    other: false,
  };

  const [state, setState] = useState(initialState);

  return (
    <ImageBackground
      source={require("../assets/population.png")}
      resizeMode="cover"
      style={styles.bg}
    >
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Checkbox
            value={state.Arab}
            onValueChange={(value) =>
              setState({
                ...state,

                Arab: value,
              })
            }
            color={state.Arab ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Arab</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.Black}
            onValueChange={(value) =>
              setState({
                ...state,
                Black: value,
              })
            }
            color={state.Black ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Black</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.Chinese}
            onValueChange={(value) =>
              setState({
                ...state,
                Chinese: value,
              })
            }
            color={state.Chinese ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Chinese</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.Filipino}
            onValueChange={(value) =>
              setState({
                ...state,
                Filipino: value,
              })
            }
            color={state.Filipino ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Filipino</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.Japanese}
            onValueChange={(value) =>
              setState({
                ...state,
                Japanese: value,
              })
            }
            color={state.Japanese ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Japanese</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.Korean}
            onValueChange={(value) =>
              setState({
                ...state,
                Korean: value,
              })
            }
            color={state.Korean ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Korean</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.LatinAmerican}
            onValueChange={(value) =>
              setState({
                ...state,
                LatinAmerican: value,
              })
            }
            color={state.LatinAmerican ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Latin American</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.SouthAsian}
            onValueChange={(value) =>
              setState({
                ...state,
                SouthAsian: value,
              })
            }
            color={state.SouthAsian ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>
            South Asian (e.g., East Indian, Pakistani, Sri Lankan, etc.){" "}
          </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.SouthAsian}
            onValueChange={(value) =>
              setState({
                ...state,
                SouthAsian: value,
              })
            }
            color={state.SouthAsian ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>
            Southeast Asian (including Vietnamese, Cambodian, Laotian, Thai,
            etc.)
          </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.SoutheastAsian}
            onValueChange={(value) =>
              setState({
                ...state,
                SoutheastAsian: value,
              })
            }
            color={state.SoutheastAsian ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>
            Southeast Asian (including Vietnamese, Cambodian, Laotian, Thai,
            etc.){" "}
          </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.WestAsian}
            onValueChange={(value) =>
              setState({
                ...state,
                WestAsian: value,
              })
            }
            color={state.WestAsian ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>
            West Asian (e.g. Iranian, Afghan, etc.)
          </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.White}
            onValueChange={(value) =>
              setState({
                ...state,
                White: value,
              })
            }
            color={state.White ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>White</Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.other}
            onValueChange={(value) =>
              setState({
                ...state,
                other: value,
              })
            }
            color={state.other ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>Other </Text>
        </View>

        <View style={styles.container}>
          <Checkbox
            value={state.notListed}
            onValueChange={(value) =>
              setState({
                ...state,
                notListed: value,
              })
            }
            color={state.notListed ? "#4DBAF6" : undefined}
          />
          <Text style={styles.text}>I prefer not to answer </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnSignup}
        onPress={() => navigation.navigate("languages")}
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
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: "#CFCCCC",
    maxHeight: "41%",
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
