
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn: async (phoneNumber) => {
            if(!phoneNumber){
                Alert.alert('Error', 'Please Enter number')
              }
              else{
              try {
                return await auth().signInWithPhoneNumber(phoneNumber);
            } catch (error) {
                Alert.alert(error);
              }
            }
          },
        confirmVerificationCode: async (state, code) =>{
            return state.confirm(code)
            .then(() => {})
            .catch(err => Alert.alert(err.code, err.message))
        },
        signOut: async () => {
            try {
                await auth().signOut();
              } catch (e) {
                console.log(e);
                 }
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};