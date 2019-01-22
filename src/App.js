import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = firebase.initializeApp({
      apiKey: 'AIzaSyAktaqx7u4-opdyUpSDZxYTAVH9S0MEDM0',
      authDomain: 'auth-d389a.firebaseapp.com',
      databaseURL: 'https://auth-d389a.firebaseio.com',
      projectId: 'auth-d389a',
      storageBucket: 'auth-d389a.appspot.com',
      messagingSenderId: '198682215862'
    });
    firebase.initializeApp(config);
  }
  ß
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  } 
}
  export default App;
