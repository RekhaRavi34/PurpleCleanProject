import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'white' : 'grey';
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
        <Text style={{fontSize:16, color:"grey"}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"grey"}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:"grey"}}>Done</Text>
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
            backgroundColor: '#a6e4d0',
            image: <Image style={styles.image} source={require('../assets/image1.png')} />,
            title: 'Messy home?',
            titleStyles:{fontWeight:'500'},
            subtitle: 'Shine up your homes with us.',
            subTitleStyles:{color:'grey'}
          },
          {
            backgroundColor: '#99ff99',
            image: <Image style={styles.image} source={require('../assets/image2.png')} />,
            title: 'Affordable Rates',
            titleStyles:{fontWeight:'500'},
            subtitle: 'Cheap yet effective cleaning services.',
            subTitleStyles:{color:'grey'}
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image style={styles.image} source={require('../assets/image3.png')} />,
            title: 'DoorStep Service',
            titleStyles:{fontWeight:'500'},
            subtitle: 'Cleaning experts at your doorstep.',
            subTitleStyles:{color:'grey'}
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