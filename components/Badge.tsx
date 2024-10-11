import { Text, View } from "react-native";

const Badge = () => {
    return (
        <>
            <View style={{ backgroundColor: "#221C3D", width: 90, alignItems: "center", borderRadius: 8 }}>
                <Text style={{ color: "#8162FF" }}>Confirmado</Text>
            </View>
        </>
    );
}

export default Badge;