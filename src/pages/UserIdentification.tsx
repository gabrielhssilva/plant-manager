import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

import { CustomButton } from "../components/CustomButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleStart() {
      navigation.navigate("Confirmation");
    }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? "😁" : "😄"}</Text>
              <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
            </View>
            <TextInput
              placeholder="Digite seu nome"
              style={[
                styles.textInput,
                (isFocused || isFilled) && styles.inputFocused,
              ]}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChangeText={handleInputChange}
              />
            <View style={styles.footer}>
              <CustomButton onPress={handleStart} title="Confirmar" />
            </View>
          </View>
        </View>
</TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  inputFocused: {
    borderColor: colors.green,
  },
});
