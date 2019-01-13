import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAktaqx7u4-opdyUpSDZxYTAVH9S0MEDM0',
        authDomain: 'auth-d389a.firebaseapp.com',
        databaseURL: 'https://auth-d389a.firebaseio.com',
        projectId: 'auth-d389a',
        storageBucket: 'auth-d389a.appspot.com',
        messagingSenderId: '198682215862'
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <LoginForm />
      </View>
      );
    }
}

export default App;
