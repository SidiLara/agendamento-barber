import React from "react";
import { StyleSheet, View, TouchableOpacityProps, Image } from "react-native";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";


export function Header() {
    function handleButtonPress() {
        console.log("Menu pressionado")
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
                    <ButtonSmall
                        iconName="menufold"
                        style={{ backgroundColor: "transparent" }}
                        onPress={handleButtonPress}
                    />
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
        paddingBottom: 8,
    }

})