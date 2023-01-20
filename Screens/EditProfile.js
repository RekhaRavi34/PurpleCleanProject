import React from 'react';
import {View, SafeAreaView, StyleSheet, Image,Text, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {windowHeight, windowWidth} from '../utils/Dimension';

  
  const Profile = () =>{
    return(
        <View style={styles.container}>
          <Text style={styles.heading}>Edit your profile information here!</Text>
          <View style={styles.ImageHolder}>
              <Image
              source={require('../assets/profile-pic.jpg')}
              resizeMode={'contain'}
              style={styles.Image}/> 
          </View>
          <Text></Text>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='person' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            placeholder='Your Name'
            placeholderTextColor="grey"
            style={styles.input}>Rekha Ravi</TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='phone' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            placeholder='Your Number'
            placeholderTextColor="grey"
            style={styles.input}>+918056224832</TextInput>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='mail' size={20} color="#730099" />
            </View>
            <TextInput 
            numberOfLines={1}
            placeholder='Your Email'
            placeholderTextColor="grey"
            style={styles.input}>rekharavi1997@gmail.com</TextInput>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>{}}>
            <Text style={styles.buttonText} >Submit</Text>
          </TouchableOpacity>
        </View>
    );
}
export default Profile;

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
  }
);