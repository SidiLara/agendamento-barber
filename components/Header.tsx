import React from "react";
import { StyleSheet, View, TouchableOpacityProps, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


interface HeaderProps {
    isLoading?: boolean;
    iconName?: keyof typeof AntDesign.glyphMap;
    disabled?: true;
    variant?: "primary" | "outline";
    style?: TouchableOpacityProps["style"];
}

export function Header({
    isLoading = false,
    iconName,
    disabled,
    variant = "primary",
    style,
}: HeaderProps) {

    return (
        <>
            <View style={styles.border}>
                <View style={styles.container}>
                    <Image
                        source={require("../assets/images/logo.png")}
                    />
                    <View >
                        {iconName && <AntDesign style={{ paddingEnd: 4 }} size={20} name={iconName} color={"#FFF"} />}
                    </View>
                </View>
            </View>
        </>

    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 46,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
    },
    border: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#808080",
        width: "100%"
    },
    title: {
        color: "#FFF"
    },

})