import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Badge from "./Badge";

const Agendamentos = () => {
    return (
        <>
            <View style={{
                backgroundColor: "#1A1B1F", borderWidth: 2,
                borderColor: "#26272B",
                borderRadius: 8,
                padding: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <View >
                    <Badge />
                    <Text style={[styles.h3, { marginVertical: 20 }]}>Corte de cabelo</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ resizeMode: "contain", borderRadius: 100, width: 40, height: 40, marginEnd: 10 }}
                            source={{
                                uri: 'https://avatars.githubusercontent.com/u/91575733?v=4',
                            }}
                        />
                        <Text style={styles.h3}>Vintagem Barber</Text>
                    </View>
                </View>
                <View style={{ borderStartWidth: 2, borderLeftColor: "#26272B", height: "100%" }} />
                <View>
                    <View style={{ flexDirection: "column", alignItems: "center" }}>
                        <Text style={styles.h3}>Fevereiro</Text>
                        <Text style={styles.h3}>06</Text>
                        <Text style={styles.h3}>09:45</Text>
                    </View>
                </View>
            </View >
        </>
    );
}

export default Agendamentos;

const styles = StyleSheet.create({
    h2: {
        color: "#838896",
        fontSize: 24
    },
    h3: {
        color: "#FFFFFF",
        fontSize: 24,
    }
})