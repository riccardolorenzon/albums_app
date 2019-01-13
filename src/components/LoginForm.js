import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(
      email, 
      password
    ).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(
        email, 
        password
      ).catch(() => {
        this.setState({ error: 'Authentication failed.' });
      });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeholder="user@example.com"
            label="Email"
            value={this.state.email} 
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>  
        <CardSection>
          <Input 
            placeholder="password"
            value={this.state.password}
            secureTextEntry 
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>  
        
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>  
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center', 
    color: 'red'
  }
};

export default LoginForm;
