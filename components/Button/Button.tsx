import React from "react";
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Tamanhos } from "@/constants/Tamanhos";


interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
  disabled?: true;
}

export function Button({
  title, onPress,
  isLoading = false,
  iconName,
  disabled }: ButtonProps) {

  const backgroundColor = disabled ? "#808080" : Colors.orange;
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      {isLoading ? <ActivityIndicator color="#fff" /> :
        <View style={styles.content}>
          {iconName && <AntDesign style={{ paddingEnd: 4 }} size={20} color={"#fff"} name={iconName} />}
          <Text style={styles.title}> {title}</Text>
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
    height: 50
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: Tamanhos.FS_M,
    textAlign: "center"
  }
})