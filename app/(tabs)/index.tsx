import { Button } from '@/components/Button/Button';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [loading, setIsLoading] = useState(false);
  function handleButtonPress() {
    setIsLoading(true)
    console.log("Pressionado")
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }

  return (
    <View style={styles.container}>
      <Button
        // disabled
        style={{ marginBottom: 20 }}
        isLoading={loading}
        title='Confirmar'
        onPress={handleButtonPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  }
})