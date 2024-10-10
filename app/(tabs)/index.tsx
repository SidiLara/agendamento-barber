import { Input } from '@/components/Input';
import { StyleSheet, View, StatusBar, Text, TextInput } from 'react-native';

const HomeScreen = () => {
  return (<>
    <View style={styles.container}>
      <Text style={styles.h2}>Olá Sidinei!</Text>
      <Text style={styles.p}>Segunda-feira, 05 de agosto</Text>
      <View style={{ marginTop: 10 }} >
        <Input
          iconName='search1'
        />
      </View>

    </View>
  </>);
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16
  },
  h2: {
    color: "#FFF",
    fontSize: 24
  },
  p: {
    color: "#FFF",
    fontSize: 16
  },
})