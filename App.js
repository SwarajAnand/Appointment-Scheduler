import { StyleSheet, Text, View , Button , Image, ImageBackground} from 'react-native';
import React from 'react';
import Inputs from './components/input';

const backImage = require('./assets/backgroung.jpg');


export default function App() {
  return (
    <ImageBackground source={backImage} resizeMode='cover'>
        <Text style={{padding : 40,
                      textAlign:'center',
                      fontSize:35}}>SCHEDULE   A APPOINTMENT</Text>
        <Inputs />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
