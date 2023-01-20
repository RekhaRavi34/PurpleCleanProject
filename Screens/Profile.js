import React from 'react';
import {View, SafeAreaView, StyleSheet, Image,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {windowHeight, windowWidth} from '../utils/Dimension';

  
  const Profile = () =>{
    return(
        <View style={styles.container}>
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
            <Text style={styles.input}>Rekha Ravi</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='phone' size={20} color="#730099" />
            </View>
            <Text style={styles.input}>+918056224832</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='mail' size={20} color="#730099" />
            </View>
            <Text style={styles.input}>rekharavi1997@gmail.com</Text>
          </View>
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
      width: '80%',
      height: windowHeight / 16,
      borderColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
       
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
  }
);