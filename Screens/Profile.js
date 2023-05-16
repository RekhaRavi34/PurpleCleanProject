import React, { useId } from 'react';
import {View, SafeAreaView, StyleSheet, Image,Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {windowHeight, windowWidth} from '../utils/Dimension';
import auth from "@react-native-firebase/auth";

const user = auth().currentUser;

  class Profile extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
      }
  }

  
componentDidUpdate() {
  this._getCurrentUser();
}
 
  _getCurrentUser = async () => {
    if (user != null) {
        this.setState({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        })
    }
}
    

    render(){
      
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
            <Text style={styles.input}>{this.state.name || "Add your name in edit section"}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='phone' size={20} color="#730099" />
            </View>
            <Text style={styles.input}>{user.phoneNumber}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <Icon name='mail' size={20} color="#730099" />
            </View>
            <Text style={styles.input}>{this.state.email || "Add your email in email section"}</Text>
          </View>
         
        </View>
    
    );
}}
export default Profile;

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
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
        borderColor:'#e6e6e6',
        
        
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