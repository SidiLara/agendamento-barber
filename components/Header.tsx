import React from "react";
import { StyleSheet, View, TouchableOpacityProps, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "./Button/Button";


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
    function handleButtonPress() {
        console.log("Pressionado")
        setTimeout(() => {
        }, 500);
    }
    return (
        <>
            <View style={styles.conteiner}>
                <View style={styles.content}>
                    <Image
                        source={require("../assets/images/logo.png")}
                    />
                    <Button
                        title=""
                        onPress={handleButtonPress}
                        style={{
                            backgroundColor: "none",
                            paddingEnd: 0,
                            width: 60,
                        }}
                        iconName="menufold"
                    ></Button>
                </View>
            </View>
        </>

    );
}


const styles = StyleSheet.create({
    conteiner: {
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderColor: "#808080",
        width: "100%"
    },
    content: {
        marginTop: 34,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    }

})