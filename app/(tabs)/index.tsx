import Agendamentos from '@/components/Agendamentos';
import { Input } from '@/components/Input';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const pesquisa = () => {
  console.log("pesquisa")
}

const HomeScreen = () => {
  return (<>
    <View style={styles.container}>
      <Text style={styles.h1}>Olá Sidinei!</Text>
      <Text style={styles.p}>Segunda-feira, 05 de agosto</Text>
      <View style={{ marginTop: 10 }} >
        <Input
          onPress={pesquisa}
        />
      </View>
      {/* IMAGEM */}
      <View style={styles.image}>
        <ScrollView horizontal >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity>
              <Image style={{ resizeMode: "contain", height: 150, width: 350 }}
                source={require('../../assets/images/banner-01.png')}
              />
            </TouchableOpacity>
            <Image style={{ resizeMode: "contain", height: 150, width: 350 }}
              source={require('../../assets/images/banner-01.png')}
            />
          </View>
        </ScrollView >
      </View>
      {/* AGENDAMENTOS */}
      <Text style={styles.h2}>AGENDAMENTOS</Text>
      <View style={{ marginTop: 10 }}>
        <Agendamentos />
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
  image: {
    marginVertical: 10
  },
  h1: {
    color: "#FFFFFF",
    fontSize: 24
  },
  h2: {
    color: "#838896",
    fontSize: 18
  },
  p: {
    color: "#838896",
    fontSize: 16
  },
})