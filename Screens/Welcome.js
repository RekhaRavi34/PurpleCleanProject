import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import { GoogleSignin, GoogleSigninButton, GoogleSigninButtonProps } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
export default class Welcome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false,
      user:'',
    }
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '785966928973-lk882n42vride9l3or39887jvph9c7oo.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: '', 
      forceConsentPrompt: true, 
    });
    
  }
  onAuthStateChanged=(user) => {
    this.setState(user);
    console.log(user);
    if (user) 
    this.setState({ loggedIn: true });
  }
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      this.setState({ loggedIn: false });

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
     const user_info= auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        alert('Signin in progress');      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({ loggedIn: false });
      } else {
        // some other error
        this.setState({ loggedIn: false });
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
        this.setState({ loggedIn: false });
      // setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
render(){
return (
<View >
  <ImageBackground style={styleSheet.container} source={{uri:'https://i.pinimg.com/originals/53/08/f4/5308f4249db3ff950a3ccc207006f593.jpg'}}>
      <View style={styleSheet.container2}>
        <Image style={styleSheet.image} source={{uri:'https://img.freepik.com/premium-vector/letter-p-circle-gradient-logo-design_23987-979.jpg?w=2000'}}/> 
      </View>
      <View style={styleSheet.container4}>
      <Text style={styleSheet.got}>Got Dirt?   <Text style={styleSheet.here}>Here we go.</Text></Text>
      </View>
      <View style={styleSheet.container3}>
         <TouchableOpacity style={styleSheet.button} onPress={this._signIn}
                  disabled={this.state.isSigninInProgress}> 
           <Text style={styleSheet.text2}>G</Text> 
           <Text  style={styleSheet.text1} >Sign in with OTP</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styleSheet.button2}  > 
           <Text  style={styleSheet.text3} onPress={()=>this.props.navigation.navigate('SignUp')}>Create an Account</Text>
         </TouchableOpacity>          
      </View>

      <View style={{alignSelf:"center"}}>
        
        <Text style={styleSheet.dont}>Already have an account? <Text style={styleSheet.endsign} onPress={()=>this.props.navigation.navigate('SignIn')}>Sign In</Text>
        </Text>
      </View>

      <View style={styleSheet.buttonContainer}>
              {!this.user && <Text>You are currently logged out</Text>}
              {this.user && (
                <View>
                  <Text>Welcome {user.displayName}</Text>
                  <Button
                    onPress={this.signOut}
                    title="LogOut"
                    color="white"></Button>
                </View>
              )}
            </View>
  </ImageBackground>
</View>
    
    );
}
}
const styleSheet = StyleSheet.create({
  image:{
    width: 90, 
    height: 90,
    alignSelf:"center",
    borderRadius:8, 
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  container:{
    height:"100%",
    width:"100%"
  },
  container2:{
    marginTop:150,
  },
  text1:{
    color:"#730099",
    fontWeight: "bold",
    alignSelf: "center",fontSize: 15,
    marginTop:-21
    // padding:11
  },
  text2:{
    color:"#730099",
    fontWeight: "bold",
    marginLeft:15,
    alignSelf: "flex-start",fontSize: 15,
    marginTop:12
  },
  button: {
    alignSelf: "center",
    backgroundColor: "white",
    alignContent:"center" ,
    borderRadius:10,
    height:45,width:"100%",
    marginTop: 40,
    marginLeft:10,
    marginRight: 10,  
  },
  container3:{
    
    marginLeft:30,
    marginRight: 30,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#730099",
    alignContent:"center" ,
    borderRadius:10,
    height:45,width:"100%",
    marginTop: 20,
    marginLeft:10,
    marginRight: 10,  
    borderColor:"white",
    borderWidth: 1.5
    
  },
   text3:{
        color:"white",
        padding:10,
        alignSelf: "center",fontSize: 14,
        fontWeight: "bold",
  },
    dont:{
      color: "grey",
      fontSize: 13,
      marginTop:40
   },
  endsign:{
       color:"#730099",
       fontWeight:"bold"
  },
  here:{
    fontSize:20,
    color: "white",
    flexDirection: "column",
    marginTop: 10,
    fontWeight: "bold",
    fontStyle:"italic"
    },
    got:{
    fontSize:15,
    color: "white",
    flexDirection: "column",
    marginTop: 30,
    },
    container4:{
      marginLeft:30,
      marginRight: 30,
      alignSelf:"center"
    }
});

