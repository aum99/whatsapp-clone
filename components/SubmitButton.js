import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

const SubmitButton = (props) => {
  const enabledBgColor = props.color || colors.primary;
  const disabledColor = colors.lightGrey;
  const bgColor = props.disabled ? disabledColor : enabledBgColor;
  return (
    <TouchableOpacity
      onPress={props.disabled ? "" : props.onPress}
      style={{ ...styles.button, ...props.style, ...{ bgColor } }}
    >
      <Text style={{ color: props.disabled ? colors.darkGrey : "white" }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SubmitButton;
