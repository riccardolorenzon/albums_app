import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(
      email, 
      password
    ).then(this.onLoginSuccess.bind(this))
      .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(
        email, 
        password
      ).then(this.onLoginSuccess.bind(this))
       .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '', 
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed', 
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
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
          { this.renderButton() }
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
