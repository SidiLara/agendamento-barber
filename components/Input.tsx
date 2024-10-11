import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";

const searchPressionado = () => {
    console.log("Search pressionado")
}
interface InputProps {
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    style?: TouchableOpacityProps["style"];
}
export function Input({
    onPress,
    iconName,
    style,
}: InputProps) {
    return (
        <>
            <View style={styles.content}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Faça sua busca..."
                    placeholderTextColor={"#838896"}
                />
                <ButtonSmall
                    onPress={onPress}
                    iconName="search1"
                />
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
        borderWidth: 2,
        borderColor: "#26272B",
        backgroundColor: "#1A1B1F",
        color: "#fff",
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