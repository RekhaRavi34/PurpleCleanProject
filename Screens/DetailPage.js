import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImageSlider } from 'react-native-image-slider-banner';
import { windowHeight } from "../utils/Dimension";

//https://www.npmjs.com/package/react-native-image-slider-banner
export default class DetailPage extends React.Component{
  
    render(){
        const initiateWhatsApp = () => {
       
            let url =
              'whatsapp://send?text=Please drop a message and we will get back to you!!&phone=918056261904';
            Linking.openURL(url)
              .then((data) => {
                console.log('WhatsApp Opened');
              })
              .catch(() => {
                alert('Make sure Whatsapp installed on your device');
              });
          };
        return(
            <View style={styles.container}>

               {/* <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <View style={{marginLeft:30,marginTop:60, backgroundColor:'#df80ff', borderRadius:10,padding:3,width:38, height:38,justifyContent:"center",}} >
                        <Ionicons name="chevron-back-outline" color="white" size={30}></Ionicons>
                    </View>
                    </TouchableOpacity>
                </View> */}

                <ScrollView style={styles.contain}>
                <View style={styles.content}>
                 <ImageSlider 
                 data={this.props.route.params.image}
                 autoPlay={false}
                 closeIconColor="#fff"
                 activeIndicatorStyle={{backgroundColor:"#730099"}}
                 inActiveIndicatorStyle={{backgroundColor:"#df80ff"}}
                 />
                 
                    <Text style={styles.title}>{this.props.route.params.title}</Text>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descriptiontext}>{this.props.route.params.des1}</Text>
                    <Text style={styles.descriptiontext}>{this.props.route.params.des2}</Text>
                    <Text style={styles.descriptiontext}>{this.props.route.params.des3}</Text>
                    <Text style={styles.descriptiontext}>{this.props.route.params.des4}</Text>
                    <Text style={styles.descriptiontext}>{this.props.route.params.des5}</Text>
                    
                    {/* <Text style={styles.pricetext}>Charges :</Text>
                    <View style={styles.rowcol}>
                    <View style={styles.priceview}>
                    <Text style={styles.price}>{this.props.route.params.price}</Text>
                        </View>
                        <View style={styles.cartview}>
                        <Text style={styles.carttext}>Book now!</Text>
                        </View>
                    </View> */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={initiateWhatsApp}>
                       <Text style={styles.buttonText}>Book Appointment</Text>
                       <View style={styles.iconStyle} >
                       <Ionicons name='call' size={25} color="white" />
                       </View>
                    </TouchableOpacity>
                 </View>
                </ScrollView>
               </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"white"
        },
        header:{
            backgroundColor:"#730099",
            height:"15%",
            width:"100%"
        },
        contain:{
            backgroundColor:"white"
        },
        imageslider:{
            marginTop:0
        },
        content:{
            marginLeft:20,
            marginRight:20,
            backgroundColor:"white"
        },
        title:{
            fontSize:20,
            fontWeight:'700',
            color:"#282828",
            fontFamily:"serif",
        },
        description:{
            marginTop:20,
            marginBottom:10,
            fontSize:16,
            fontWeight:'500',
            fontStyle:'italic',
            color:"black"
        },
        descriptiontext:{
            color:"black"
        },
        rowcol:{
            flexDirection:"row"
        },
        pricetext:{
            marginTop:45,
            marginBottom:5,
            fontSize:15,
            fontWeight:"500",
            color:"black",
            fontStyle:"italic"
        },
        priceview:{
           
            flexDirection:"column",
            width:100,
            height:50,
            borderRadius:8
            
        },
        price:{
            fontSize:20,
            paddingTop:8,
            color:"black",
            fontWeight:'500'
        },
        cartview:{
            backgroundColor:"#730099",
            width:195,
            marginLeft:50,
            marginRight:20,
            borderRadius:10
        },
        carttext:{
            color:"white",
            textAlign:"center",
            paddingTop:11,
            fontSize:18
        },
        buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 16,
        borderColor: '#ccc',
        borderRadius: 10,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#730099',
        justifyContent: 'center',
          
          },
          buttonText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Lato-Regular',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal:20     
        
          },
          iconStyle: {
            
          },
    }
)