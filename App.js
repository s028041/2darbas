/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <View style = {styles.graybox} >

<Button
  title="Button"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Button
  title="Button"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Button
  title="Button"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Button
  title="Button"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

       </View>

        <View style = {styles.pinkbox} > 
        


        <Text style = {styles.TextStyle}>
      textas
            </Text> 
        <Text style = {styles.TextStyle}>
      textas
            </Text> 


      <Text style = {styles.TextStyle}>
      textas
      </Text> 

      <Text style = {styles.TextStyle}>
      textas
      </Text> 




        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  graybox: {
      flex:1,
      backgroundColor: '#C0C0C0',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
       width: '100%',
   },

  pinkbox: {
    flex: 1,
    backgroundColor: '#FD87B2',
    width: '100%',

    flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
   },

   TextStyle: {

    fontSize: 20,
    color: 'black',
    

    
    borderWidth: 2,
    borderColor: '#fff',


   }
});
