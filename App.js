import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
<Profile></Profile> 
         
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01697a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
