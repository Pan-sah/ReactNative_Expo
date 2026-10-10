import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Heyyy Native Geng!</Text>
      <Text>Username</Text>

      <TextInput
        placeholder="Enter username"
      />

      <Button
        title="Login"
        onPress={() => alert('Login clicked')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
