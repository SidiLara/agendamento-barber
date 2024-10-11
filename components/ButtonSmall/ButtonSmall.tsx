import React from "react";
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, View, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Tamanhos } from "@/constants/Tamanhos";
import { variants } from "./variaveisBtnSmall";


interface ButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
  disabled?: true;
  variant?: "btnSPrimary" | "btnSOutline";
  style?: TouchableOpacityProps["style"];
}

export function ButtonSmall({
  onPress,
  isLoading = false,
  iconName,
  disabled,
  variant = "btnSPrimary",
  style,
}: ButtonProps) {
  const buttonVariant = variants[variant]
  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, { ...buttonStyle.button }, style]}
    >
      {isLoading ? <ActivityIndicator color={buttonStyle.icon.color} /> :
        <View style={styles.content}>
          {iconName && <AntDesign size={20} color={buttonStyle.icon.color} name={iconName} />}
        </View>}
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    height: 40,
    width: 40
  },
  content: {
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  }
})