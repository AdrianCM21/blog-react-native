import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/Router';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { injectStore } from './src/services/Api';
import { Alert } from './src/components/Alert';

injectStore(store);

export default function App() {
  return (
    <Provider store={store}>

      <Router />
      <Alert />
    </Provider>

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
