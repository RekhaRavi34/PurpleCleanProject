import React from "react";
import { useState, useContext} from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground, Alert} from "react-native";
import FormInputs from "../Components/FormInputs";
import { windowHeight } from "../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage";


const OtpVerify =  ({route,navigation}) => {

    const [code, setCode] = useState(null);
    const confirm= AsyncStorage.getItem('token')
    const number= AsyncStorage.getItem('number')
    JSON.stringify(number)
    const confirmCode = () => {
      return confirm.confirm(code)
      .then(() => {Alert.alert('loggedin')})
      .catch(err => Alert.alert(err.code, err.message))
  }
    
    return(
        // <ImageBackground style={styles.container} source={{uri:'https://i.pinimg.com/originals/53/08/f4/5308f4249db3ff950a3ccc207006f593.jpg'}}>

        <View style={styles.container}>  
        <Text style={styles.text}>Verify OTP</Text> 
        <Text style={styles.enter}>Please enter your OTP sent to  {number}</Text>
          
          <FormInputs
          placeholderText="123456"
          placeholderTextColor='grey'
          keyboardType= "number-pad"
          iconType="asterisk"
          autoFocus
          value={code}
          onChangeText={setCode}
          maxLength={6} 
          />

          <TouchableOpacity style={styles.buttonContainer} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm OTP </Text>
          </TouchableOpacity>
        {/* </ImageBackground> */}
        </View>
    );
}
export default OtpVerify;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        flex:1,
      },
      
      text: { 
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 10,
        marginTop:10,
        color: '#1a001a',
        alignSelf:'flex-start',
        
      },

      enter:{
        color: 'grey',
        alignSelf:'flex-start',
        marginBottom:5
      },

      text2:{
        color: 'grey',
        alignSelf:'flex-start',
        marginBottom:5
      },
      
      buttonContainer: {
        marginTop: 20,
        width: '100%',
        height: windowHeight / 16,
        backgroundColor:'#730099',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // borderColor:"white",
        // borderWidth: 1.5
      },
      buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Lato-Regular',
      },
      
});
