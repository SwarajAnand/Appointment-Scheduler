import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import sendEmail from './Mail';


class Inputs extends Component {
   state = {
      name: '',
      email: '',
      month: '',
      day:'',
      time:'',
      number:'',
    }
    handleName = (text) => {
        this.setState({ name: text})
        }
    handleMonth = (text) => {
        this.setState({ month: text})
        }
    handleEmail = (text) => {
        this.setState({ email: text })
        }
    handleDay = (text) => {
        this.setState({ day: text })
        }
    handleTime = (text) => {
        this.setState({ time: text })
        }
    handleNumber = (text) => {
        this.setState({ number: text })
        }
   
   login = (name, email, month,day,time,number) => {
        alert(`Hello : ${name} Your Email is : ${email} Your Appointment was Schedule in Months : ${month} On Day : ${day} At Time : ${time} Your Tel.Number -> : ${number}`)
   }

   render() {
      return (
         <View style = {styles.container}>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Name"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handleName}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Months"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleMonth}/>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Day"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handleDay}/>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Time"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handleTime}/>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = " Phone Number"
                placeholderTextColor = "black"
                autoCapitalize = "none"
                onChangeText = {this.handleNumber}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.name, 
                                this.state.email,
                                this.state.month,
                                this.state.day,
                                this.state.time,
                                this.state.number,)
               }>
               <Text style = {styles.submitButtonText}> SUBMIT </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
   },
   input: {
      fontSize : 20,
      margin: 18,
      height: 40,
      borderColor: 'black',
      borderRadius : 50,
      borderWidth: 2,
      textAlign : 'center',
   },
   submitButton: {
      backgroundColor: 'purple',
      padding: 10,
      margin: 15,
      borderRadius : 50,
      top :100,
   },
   submitButtonText:{
      color: 'white',
      fontSize: 20,
   }
})