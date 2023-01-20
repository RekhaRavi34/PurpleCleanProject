import React from 'react';
import { View, Text, Image, Linking, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import FormInputMoreLines from '../Components/FormInputMoreLine';
import FormInputs from '../Components/FormInputs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { windowHeight } from "../utils/Dimension";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import { useState } from "react";

const ContactUs = () =>{
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    
  const initiateWhatsApp = () => {       
        let url ='whatsapp://send?text=Your Message&phone=918056261904';
        Linking.openURL(url)
          .then(() => {})
          .catch(() => {
            Alert.alert('Make sure Whatsapp installed on your device');
          });
      };
    
      

  const contacthelp = () => {
    if (!name || !message || !email){
      Alert.alert('', 'Please enter all the details');
    }
    else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)){
    Alert.alert('', 'Please enter a valid email address')
    }
    else{
      Alert.alert('', 'Your request has been submitted. Our team will get back to you shortly!')
      return firestore().collection('contactus').add(
        {
            name:name,
            email:email,
            message:message,
            number:auth().currentUser.phoneNumber
        })

    }
  }
   
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <Image
            source={require('../assets/contact.png')}
            style={styles.logo}/> 
        <Text style={styles.help}>NEED HELP?</Text> 
        <Text style={styles.feel}>Please feel free to reach out to us!</Text> 
        <FormInputs
          placeholderText="Your Name"
          iconType="user"
          onChangeText={(name)=>setName(name)}
          />
        <FormInputs
          placeholderText="Email id"
          iconType="envelope-o"
          onChangeText={(email)=>setEmail(email)}
          />
        <FormInputMoreLines
          placeholderText="Your Message"
          iconType="edit"
          onChangeText={(message)=>setMessage(message)}
          />

        <TouchableOpacity style={styles.buttonContainer} onPress={contacthelp}>
            <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>

        <View style={styles.horitop}>

            <View style={{flex: 1, height: 1, backgroundColor:"grey"}} />

            <View>

                  <Text style={styles.hori}> Or React At </Text>

            </View>

            <View style={{flex: 1, height: 1, backgroundColor: "grey", }} />

        </View>

        <View style={{marginTop:15, alignSelf:"center" }} ></View>

        <View style={styles.icons}>
            <TouchableOpacity style={styles.whatsapp} onPress={initiateWhatsApp}>
            <FontAwesome name='whatsapp' size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.call} onPress={()=>Linking.openURL('tel://+918056261904')}>
            <Ionicons name='call' size={30} color="white" />
            </TouchableOpacity>
        </View>

        </ScrollView>
    );
}
export default ContactUs;

const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        flex:1,
        backgroundColor:'white',
        position:'relative',  
      },
      logo: {
        height: 120,
        width: 120,
        resizeMode: 'cover',
        marginBottom:2,  
      },
      feel:{
        fontSize:13,
        marginBottom:20,
        alignSelf:'flex-start'
      },
      help:{
        fontSize:19,
        marginBottom:5,
        color:'black',
        alignSelf:'flex-start',
        fontWeight: '700'
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
      icons:{
        flexDirection:'row',  
      },
      whatsapp:{
        backgroundColor:'#25D366', 
        borderRadius:10,
        padding:7,
        paddingTop:5,
        marginHorizontal:20,
        height:45,
        width:44
      },
      call:{
        backgroundColor:'#34B7F1', 
        borderRadius:10,
        padding:7,
        marginHorizontal:20,
        height:44,
        width:43
      },
      buttonContainer: {
        marginTop: 10,
        marginBottom:10,
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
    })