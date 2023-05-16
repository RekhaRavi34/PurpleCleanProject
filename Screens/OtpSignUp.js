import React, { useId } from "react";
import { useState, useEffect, useContext } from "react";
import { Alert, View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground} from "react-native";
import FormInputs from "../Components/FormInputs";
import { windowHeight } from "../utils/Dimension";
import auth from "@react-native-firebase/auth";

  const OtpSignUp = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState(null);
  const [ confirm, setConfirm ] = useState(null);
  const [otp, setOtp]=useState(false);

  const signIn = async() => {
    if(!phoneNumber){
      Alert.alert('', 'Please Enter number');
    }
    else{
    try{
      const confirmation =  await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setOtp(true);
    }
    catch(error) {
     switch(error.code){
      case 'auth/invalid-phone-number':
        Alert.alert('','Please enter the mobile number in valid format [+][countrycode][mobile number]');
        break;
      case 'auth/too-many-requests':
        Alert.alert('','Too many requests, please try again after 5 minutes.');
        break;
      case 'auth/session-expired':
        Alert.alert('','The code has expired. Please resend the verification code');
        break;
      default:
        Alert.alert('','An unknown error occured.');
        break;
     }   
    }
  }
}
    
  const confirmCode = () => {
    if(!code){
      Alert.alert('', 'Please enter your OTP')
    }
    else if(confirm==null){
      Alert.alert('', 'Please enter OTP only after triggering')
    }
    else{  
    return confirm.confirm(code)
    .then( () => {})
    .catch(
        (err) => {
          if(err.code=='auth/invalid-verification-code'){
            Alert.alert('','Invalid code. Please try correct code or resend to correct number and try.');
          }
          else{
            Alert.alert(err.code,err.message);
          }
        }
    )
  }
    
}
    return(
        // <ImageBackground style={styles.container} source={{uri:'https://i.pinimg.com/originals/53/08/f4/5308f4249db3ff950a3ccc207006f593.jpg'}}>
            <View style={styles.container}>
            <Image
            source={require('../assets/logo2.png')}
            style={styles.logo}/>

           <Text style={styles.text}>Purple Cleaning Services</Text> 

           <View style={styles.horitop}>

               <View style={{flex: 1, height: 1.2, backgroundColor:"grey"}} />

               <View>
                   <Text style={styles.hori}>SignIn / SignUp</Text>
               </View>

               <View style={{flex: 1, height: 1.2, backgroundColor: "grey", }} />

           </View>

           <View style={{marginTop:15, alignSelf:"center" }} ></View>

           <Text style={styles.enter}>Please enter your mobile number with your country code.</Text>
          

          <FormInputs
          placeholderText="+91 123456789"
          iconType="mobile-phone"
          value={phoneNumber}
          onChangeText={(phoneNumber)=>setPhoneNumber(phoneNumber)}
          />

          <TouchableOpacity style={styles.otp} onPress={signIn}>
          <Text style={{color:"#730099",fontSize:12}} >Request OTP!</Text>
          </TouchableOpacity>
         

         <FormInputs
          placeholderText="Your OTP"
          placeholderTextColor='grey'
          keyboardType= "number-pad"
          iconType="user-secret"
          autoFocus
          value={code}
          onChangeText={(code)=>setCode(code)}
          maxLength={6} 
          />
          
          <TouchableOpacity style={styles.buttonContainer} 
          
          onPress={confirmCode}>

            <Text style={styles.buttonText}>Confirm OTP </Text>
          </TouchableOpacity>
        {/* </ImageBackground> */}
        { otp == false ? null : <Text style={styles.didnt}>Didn't Receive OTP? Request after 2 mins.</Text>}
        </View>
    );
}
export default OtpSignUp;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        flex:1,
        backgroundColor:'white'
        
      },
      logo: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        borderRadius:5
      },
      text: {
        fontFamily: 'lucida grande',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 15,
        marginTop:10,
        color: '#1a001a',
        fontStyle:'italic'
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
      hori:{
        width: 100, 
        textAlign: 'center', 
        fontSize: 13, 
        color: "grey",
        marginTop: 0,
      
      },
      horitop:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10,
        marginBottom:10

      },
      enter:{
        color: 'grey',
        alignSelf:'flex-start',
        marginBottom:10
      },
      otp:{
        color: 'grey',
        alignSelf:'flex-end',
        marginBottom:10,
        marginTop:-5,
        
      },
      didnt:{
        color: 'grey',
        marginTop:10
      }
});
