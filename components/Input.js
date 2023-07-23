import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import colors from "../constants/colors";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            style={styles.icon}
            name={props.icon}
            size={props.iconSize || 24}
          />
        )}
        <TextInput style={styles.inputBox} />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: colors.inputTextColor,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.offWhite,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.darkGrey,
  },
  inputBox: {
    color: colors.inputTextColor,
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontFamily: "regular",
    fontSize: 13,
    letterSpacing: 0.3,
  },
});

export default Input;
