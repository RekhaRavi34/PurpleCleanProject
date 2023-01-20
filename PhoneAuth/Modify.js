import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import Services from '../Screens/Services'
import OtpSignUp from '../Screens/OtpSignUp'
import OtpVerify from '../Screens/OtpVerify';
import { Alert } from 'react-native';
export default function PhoneAuth() {
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);

  async function signIn(phoneNumber) {
    if(!phoneNumber){
      Alert.alert('Error', 'Please Enter number')
    }
    else{
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
      Alert.alert('loggedin');
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged((user) => {
    if(user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  })

  if (authenticated) return <Services/>;

  if (confirm) return <OtpVerify onSubmit={confirmVerificationCode} />;

  return <OtpSignUp onSubmit={signIn} />;
}