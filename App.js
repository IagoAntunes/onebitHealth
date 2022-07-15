import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title/index'
import Main from './src/components/Main/index'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Title/>
        <Main/>
      </View>
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
  teste: {
    backgroundColor: 'blue',
  }
});
