import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? '#730099' : 'grey';
    return (
        <View 
            style={{
                borderRadius:3,
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#730099"}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#730099"}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"#730099"}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("OtpSignUp")}
        onDone={() => navigation.navigate("OtpSignUp")}
        pages={[
          {
            backgroundColor: '#CBC3E3',
            image: <Image style={styles.image} source={require('../assets/image1.png')} />,
            title: 'Messy home?',
            titleStyles:{fontWeight:'500', color:'#730099'},
            subtitle: 'Shine up your homes with us.',
            subTitleStyles:{color:'#730099'}
          },
          {
            backgroundColor: '#CBC3E3',
            image: <Image style={styles.image} source={require('../assets/image2.png')} />,
            title: 'Affordable Rates',
            titleStyles:{fontWeight:'500', color:'#730099'},
            subtitle: 'Cheap yet effective cleaning services.',
            subTitleStyles:{color:'#730099'}
          },
          {
            backgroundColor: '#CBC3E3',
            image: <Image style={styles.image} source={require('../assets/image3.png')} />,
            title: 'DoorStep Service',
            titleStyles:{fontWeight:'500', color:'#730099'},
            subtitle: 'Cleaning experts at your doorstep.',
            subTitleStyles:{color:'#730099'}
          },
        ]}
      />
    );
};


export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%"
      },
      image:{
        width: 160, 
        height: 160,
        alignSelf:"center",
        borderRadius:8, 
      },
});