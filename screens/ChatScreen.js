import React, { useCallback, useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import backgroundImage from "../assets/images/background.jpg";

import colors from "../constants/colors";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
        style={styles.mainScreen}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log("Pressed image")}
          >
            <AntDesign name="plus" size={20} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />
          {messageText ? (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather name="send" size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("Pressed camera")}
            >
              <Ionicons
                name="ios-camera-outline"
                size={24}
                color={colors.blue}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
  },
  mainScreen: {
    flex: 1,
  },
});

export default ChatScreen;
