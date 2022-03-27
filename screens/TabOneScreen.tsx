import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, ImageBackground } from 'react-native';


export default class App extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Hello!</Text>
        <Text style={styles.titleText}>Welcome back you've been missed!</Text>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='Enter Username'
          placeholderTextColor = 'grey'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Enter Password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
     
        <TouchableOpacity
          style={styles.button}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> LOG IN </Text>
       </TouchableOpacity>
        
       <Text style={styles.titleText}>Forgot Password?</Text>
      </View>
    
    

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#455954'
    
  },
  titleText:{
    fontFamily: 'SpaceMono-Regular.ttf',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7aa39a',
    width: 120,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'SpaceMono-Regular.ttf',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    fontFamily: 'SpaceMono-Regular.ttf',
    fontSize: 15,
    height: 50,
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

