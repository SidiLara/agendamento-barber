import { Colors } from '@/constants/Colors';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.tituloDark}>
          APENAS TESTE
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16
  },
  tituloDark: {
    color: Colors.white,
    fontWeight: "bold"
  },
  tituloLight: {
    color: Colors.black,
  }
});
