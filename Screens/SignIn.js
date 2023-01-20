import React from "react";
import { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import Ionicons from "react-native-vector-icons/AntDesign"
const SignIn = ({navigation}) =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordVisible,setPasswordVisible]=useState(true);
    return(
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>

            <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}/>

           <Text style={styles.text}>Purple Cleaning Services</Text> 

            {/* <Text style={styles.email}>Email</Text> */}

            <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Enter your email"
            // keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}/>

            {/* <Text style={styles.password}>Password</Text> */}
           
            <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Enter your password"
            secureTextEntry={passwordVisible}
            onPress={() => setPasswordVisible(!passwordVisible)}
            iconType={passwordVisible ? 'eye-off' : 'eye'}/>

            <FormButton
            buttonTitle="Sign In"
            onPress={() => login(email, password)}/>

<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

            <TouchableOpacity
            style={styles.forgotButtonDont}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.navButtonText}>Don't have an account? <Text style={styles.endsign}>SignUp</Text></Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
export default SignIn;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        flex:1
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'lucida grande',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 10,
        color: '#66194d',
        fontStyle:'italic'
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 10,
        alignSelf:'flex-start',
        paddingLeft: 10,
      },
      forgotButtonDont:{
        marginVertical: 10,
      },
      navButtonText: {
        color: "grey",
      },
      email:{
        fontSize:13,
        color:"grey",
        alignSelf:"flex-start",
        marginTop:30
      },
      password:{
        fontSize:13,
        color:"grey",
        alignSelf:"flex-start",
      },
      endsign:{
        color:"#a3297a",
        fontWeight:"bold"
      },      
});
