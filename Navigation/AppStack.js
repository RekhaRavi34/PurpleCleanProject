import React from 'react';
import {View, TouchableOpacity, Text, Image, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'

import Services from '../Screens/Services'
import DetailPage from '../Screens/DetailPage';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import ContactUs from '../Screens/ContactUs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const createTwoButtonAlert = () =>
      Alert.alert('', 'Do you wish to logout?', [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => auth().signOut()},
      ]);

const ServiceStack = ({navigation}) =>(
    <Stack.Navigator >
        <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: 'Our Servcies',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerStyle: {
            shadowColor: 'black',
            elevation: 0,
            backgroundColor:"#730099"
          },
          headerRight: () => (
            <View style={{marginRight: 10, backgroundColor:'#df80ff', borderRadius:10,padding:6}}>
             <Image
            source={require('../assets/logo2.png')}
            style={{height: 25,
              width: 25,
              resizeMode: 'cover',
              }}/>
            </View>
          ),
        }}
       />
        <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{
          title: 'Detail Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#730099',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="white" />
            </View>
          ),
        }}
        />
    </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
    <Stack.Navigator >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Your Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerStyle: {
            shadowColor: 'black',
            elevation: 0,
            backgroundColor:"#730099"
          },
          headerRight: () => (
            <TouchableOpacity 
            style={{
              marginRight: 10, 
              backgroundColor:'#df80ff', 
              borderRadius:10,padding:6}}
              onPress={() => {navigation.navigate('EditProfile')}}>
              <MaterialCommunityIcons
                name="account-edit"
                size={23}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center',
          headerTitleStyle:{
            color:"white",
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: '#730099',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="white" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );

  const ContactusStack = ({navigation}) =>(
    <Stack.Navigator >
        <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'Contact Us',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
            fontWeight: 'bold',
            
          },
          headerStyle: {
            shadowColor: 'black',
            elevation: 0,
            backgroundColor:"#730099"
          },
          headerRight: () => (
            <TouchableOpacity 
            style={{
              marginRight: 10, 
              backgroundColor:'#df80ff', 
              borderRadius:10,padding:6}}
              onPress={createTwoButtonAlert}>
              <Ionicons
                name="ios-power"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          ),
        }}
        />
           
    </Stack.Navigator>
);

const AppStack = () =>{
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#730099',
            headerShown:false,
            
          }}>
             <Tab.Screen
            name='Home'
            component={ServiceStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            /> 
            <Tab.Screen
            name="ProfileTab"
            component={ProfileStack}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
            name="ContactUsTab"
            component={ContactusStack}
            options={{
                tabBarLabel: 'Contact Us',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="contact-support" color={color} size={size} />
                ),
              }}
            />
        </Tab.Navigator>
    );
}
export default AppStack;