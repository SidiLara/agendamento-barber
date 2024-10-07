import React from "react";
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, View, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Tamanhos } from "@/constants/Tamanhos";
import { variants } from "./variaveis";


interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
  disabled?: true;
  variant?: "primary" | "outline" ;
  style?: TouchableOpacityProps["style"];
}

export function Button({
  title, onPress,
  isLoading = false,
  iconName,
  disabled,
  variant = "primary",
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
          {iconName && <AntDesign style={{ paddingEnd: 4 }} size={20} color={buttonStyle.icon.color} name={iconName} />}
          <Text style={[styles.title, { color: buttonStyle.title.color }]}> {title}</Text>
        </View>}
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    borderRadius: 10,
    height: 60
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: Tamanhos.FS_M,
    textAlign: "center"
  }
})