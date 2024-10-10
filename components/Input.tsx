import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacityProps, View } from "react-native";


interface InputProps {
    iconName?: keyof typeof AntDesign.glyphMap;
    style?: TouchableOpacityProps["style"];
}
export function Input({
    iconName,
    style,
}: InputProps) {
    return (
        <>
            <View style={styles.content}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Buscar"
                />
                <View style={styles.icon}>
                    {iconName && <AntDesign
                        size={20} 
                        color={"#FFF"} 
                        name={iconName} />}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        borderRadius: 10,
        height: 60,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: "#1A1B1F",
        paddingHorizontal: 8,
        borderRadius: 8,
        height: 40,
        width: 330,
    },
    icon: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center"
    }
})