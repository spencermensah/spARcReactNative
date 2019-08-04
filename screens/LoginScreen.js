import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Image,
  Dimensions,
  ViroFlexView,
  ViroImage,
  Button,
  Keyboard
} from 'react-native';

import {Sae} from "react-native-textinput-effects";


export default class LoginScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
          email: "",
          password: "",
          response: ""
      };

      this.signup = this.signup.bind(this);
      this.login = this.login.bind(this);
  }

  async signup() {
    Keyboard.dismiss();
    try {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "account created"
        });

        setTimeout(() => {
            this.props.navigation.navigate('DashboardScreen')
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }

}

async login() {
    Keyboard.dismiss();
    try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "Logged In!"
        });

        setTimeout(() => {
            this.props.navigation.navigate('DashboardScreen')
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }

}

  render() {
    return(
      <View style={localStyles.outer}>
        <View style={localStyles.inner} >
          <Text>Firebase Sample</Text>
          <Button title="sign in with google" onPress={()=>alert("button presses")}></Button>
        </View>
      </View>
    )
  }

}

var localStyles = StyleSheet.create({
  crosshair: {
    position: "absolute",
    backgroundColor: "transparent"
  },
  viroContainer :{
    flex : 1,
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#fff'
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});


module.exports = LoginScreen
