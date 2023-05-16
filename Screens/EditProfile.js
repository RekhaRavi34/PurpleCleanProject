import React from 'react';
import {View, SafeAreaView, StyleSheet, Image,Text, TextInput,TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {windowHeight, windowWidth} from '../utils/Dimension';
import auth from "@react-native-firebase/auth";
import { useState, useEffect, useContext } from "react";

// image picker issue
// fixed using launch 
// and assets[0]
//https://stackoverflow.com/questions/67822962/react-native-image-picker-response-uri-is-undefined

  
    const EditProfile = () =>{
    const user = auth().currentUser;
    const [image, setImage] = useState(user.photoURL);
    const [name, setName] = useState((user.displayName));
    const [mail, setMail] = useState((user.email));
    
     
        // Able to get profile url but image is not fetched, need to fix the issue
        // const handleChooseImages = () => {
        //   launchImageLibrary(options, (response) => {
        //   if (response.didCancel) {
        //   console.log('User cancelled image picker');
        //   } else if (response.error) {
        //   console.log('ImagePicker Error: ', response.error);
        //   } else {
        //   const source = response.assets[0].uri ;
        //   if(response.assets[0].uri!=undefined){
        //     setImage(source)
        //     user.updateProfile({
        //     photoURL: source
        //     }).then(function() {
        //     Alert.alert('',"User photoURL updated successfully! Please relaunch the app to see the changes");
        //     }).catch(function(error) {
        //     console.log("Error updating user photoURL:", error);
        //     });
        //     }
        //     else{
        //       console.log('please give a proper image')
        //     }}
        //     });
            
        //     }

        // Code doesn't open cam, need to fix
        //  const handleOpenCamera = () => {
        //   launchCamera(options, (response) => {
        //   if (response.didCancel) {
        //   console.log('User cancelled image picker');
        //   } else if (response.error) {
        //   console.log('ImagePicker Error: ', response.error);
        //   } else {
        //   const source = {uri: response.assets[0].uri};
        //   if(response.assets[0].uri!=undefined){
        //   user.updateProfile({
        //   photoURL: source
        //   }).then(function() {
        //   console.log("User photoURL updated successfully!");
        //   }).catch(function(error) {
        //   console.log("Error updating user photoURL:", error);
        //   });
        //   }
        //   else{
        //     console.log('please give a proper image')
        //   }}
        //   });
        //   }
    
    const Update = () =>{
      if (!name  || !mail){
        Alert.alert('', 'Please enter all the details');
      }
      else if(!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)){
        Alert.alert('', 'Please enter a valid email address')
      }
      else{
          user.updateProfile({displayName:name}).then(() => {
            console.log("Name updated!");
          })
          .catch((error) => {
             Alert.alert(error); 
            });
        
          user.updateEmail(mail).then(() => {
            console.log("Email updated!");
          })
          .catch((error) => {
            if(error.code='auth/requires-recent-login'){
              Alert.alert('','This operation is sensitive and requires recent authentication. Log in again before retrying this request.');
            }
            else{
              Alert.alert(error);
            }
          });
          
        Alert.alert('','Your information has been updated. Please relaunch the app to see the changes') 

    }}

    
    return(
        <View style={styles.container}>
          <Text style={styles.heading}>Edit your profile information here!</Text>
          <View style={styles.ImageHolder} >
          <Image
        source={require('../assets/profile-pic.jpg')}
        resizeMode={'contain'}
        style={styles.Image}/>
          </View>
         
          {/* <TouchableOpacity style={styles.buttonContainer1} onPress={handleChooseImages}>
            <Text style={styles.buttonText1}>Pick image</Text>
          </TouchableOpacity> */}
          <Text></Text>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='person' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            placeholder='Your Name'
            placeholderTextColor="grey"
            style={styles.input}
            onChangeText={(name)=>setName(name)}>{user.displayName}</TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='phone' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            // placeholder='Your Number'
            // placeholderTextColor="grey"
            style={{color:'grey'}} 
            editable={false}
            selectTextOnFocus={false}>{user.phoneNumber}</TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='mail' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            placeholder='Your Email'
            placeholderTextColor="grey"
            style={styles.input}
            onChangeText={(mail)=>setMail(mail)}>{user.email}</TextInput>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={Update}>
            <Text style={styles.buttonText} >Submit</Text>
          </TouchableOpacity>
        </View>
    );
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        flex:1,
        backgroundColor:'white'
      },
      heading:{
        marginBottom:30,
        fontSize:18
      },
      logo: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
        marginBottom:2,
        borderRadius:50  
      },
      ImageHolder: { 
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        justifyContent:'center',
        borderColor:'#e6e6e6'
        
    },
    Image: { 
    height: 90,
    width: 90,
    borderRadius: 50, 
    alignSelf:'center'
    },
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '90%',
      height: windowHeight / 16,
      borderColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 15,
      fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 15,
        marginBottom:10,
        width: '90%',
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
      buttonContainer1: {
        marginTop: 15,
        marginBottom:10,
        width: '31%',
        height: windowHeight / 25,
        backgroundColor:'#730099',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // borderColor:"white",
        // borderWidth: 1.5
      },
      buttonText1: {
        fontSize: 12,
        // fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Lato-Regular',
      },
      
  }
);