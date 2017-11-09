/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

var  colors = ['#ddd', '#efefef', 'red',
 '#666', 'rgba(0,0,0,.1)', '#ededed',
 'aqua','cyan','deeppink',
 'blue','blueviolet','chartreuse',
 'darkmagenta','deepskyblue','gold'];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// function getRandomColor () {
//   const index = Math.floor(Math.random() * (4))
//   console.log('index:', index)
//   return colors[index]
// }

export default class App extends Component<{}> {

  constructor(){
    super()
    this.state = {
      color: 'orange',
      color2: 'orange',
      color3: 'orange',
      color4: 'orange',
     }
   }

   _changeStyle() {
    var color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
        color: color,
    })
    }

     _changeStyle2() {
      var color = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
          color2: color,
      })
      }
      _changeStyle3() {
        var color = colors[Math.floor(Math.random() * colors.length)];
        this.setState({
            color3: color,
        })
        }
        _changeStyle4() {
      var color = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
          color4: color,
      })
      }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexBox1}>
        <View style={styles.containerTwo}>
        <TouchableOpacity
        onPress={() => this._changeStyle()}>
            <Text style = {styles.textButton}> Button1 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._changeStyle2()}>
            <Text style = {styles.textButton}> Button2 </Text>
        </TouchableOpacity>
          </View>
          <View style={styles.containerThree}>
        <TouchableOpacity
          onPress={() => this._changeStyle3()}>
            <Text style = {styles.textButton}> Button2 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._changeStyle4()}>
            <Text style = {styles.textButton}> Button2 </Text>
        </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexBox2}>
            <Text style = {{ marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: this.state.color }}> text1 </Text>
             <Text style = {{ marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: this.state.color2 }}> text2 </Text>
            <Text style = {{ marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: this.state.color3 }}> text3 </Text>
            <Text style = {{ marginTop:10,
    borderWidth: 6,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 95,
    borderColor: 'yellow',
    color: this.state.color4 }}> text4 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  containerTwo: {
    flex:2,
    flexDirection: 'row',
  },
  containerThree: {
    flex:2,
    flexDirection: 'row',
  },
  flexBox1: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'space-around'//between
  },
  flexBox2: {
    flex:1,
    backgroundColor:'#FD87B2',
  },
  textButton:{
    marginTop:35,
    borderWidth: 5,
    padding:5,
    width:150,
    textAlign: 'center',
    fontSize: 26,
    marginLeft: 20,
    borderColor: 'yellow',
    backgroundColor: '#ffffff',
    color: 'black'
  },
});