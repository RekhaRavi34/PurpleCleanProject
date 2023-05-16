import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Card, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';


const persons = [{
      id:"1",
      title: 'Full Home',
      title2:'Full House Deep Cleaning',
      des1:'Team of 2-3 professional cleaners',
      des2:'Deep cleaning duration: 5-6 hours',
      des3:'Includes floor disc machine for a thorough cleaning of floor tiles',
      des4:'Dry vacuuming of all fabrics, including sofa, carpet, mattress and curtains',
      des5:'Thorough cleaning of all hard to reach areas and fixtures, including balcony, exhaust fan, ceiling fan, etc.',
      uri: "https://i.pinimg.com/736x/13/a6/fe/13a6fe03c848683d7406137f80c52402.jpg",
      image:[{img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-ideas-white-palette-1639423211.jpg'},{img: 'https://foyr.com/learn/wp-content/uploads/2019/01/master-bedroom.png'}],
      price:'₹5,499/-',
      
    },
    {
      id:"2",
      title: 'Kitchen',
      title2: 'Kitchen [Chimney not included]',
      des1:'Complete deep cleaning of kitchen covering hard to reach areas',
      des2:'Includes de-greasing and disinfection of full kitchen',
      des3:'Exclusion: Chimney, removing utensils from cabinets',
      uri: "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-cute-illustration-of-family-kitchen-image_2239579.jpg",
      image:[{img:'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/10095226/ceiling-cabinets-posh.jpeg'}, {img:'https://media.architecturaldigest.com/photos/60a6a478ced6797772f44d7a/master/pass/20191011-DSC_7759-Edit_HI_RES.jpeg'}],
      price:'₹5,499/-',
    },
    
    {
      id:"3",
      title: 'Chimney',
      title2:'Chimney Deep Cleaning',
      des1:'Removes oil deposits that accumulate with regular cooking',
      des2:'Recommended once every 2 months',
      des3:'Includes exterior and filter cleaning',
      des4:'Exclusion: Chimney servicing',
      uri: "https://www.airkinghq.ca/thumbnail/product/1186847/300/335/VAL36SS.jpg",
      image:[{img:'https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-30700,msid-92679254/best-kitchen-chimneys-under-15000-in-india.jpg'}],
      price:'₹5,499/-',
  
    },
  
    {
      id:"4",
      title: 'Bathroom',
      title2:'Bathroom Deep Cleaning',
      des1:'Deep cleaning of Bathroom Floor and wall tiles',
      des2:'Stain removal from taps, fittings & fixtures',
      des3:'Disinfection of toilet seat & wash basin',
      uri: "https://img.freepik.com/premium-vector/interior-toilet-room-with-sink-mirror-toilet-vector-illustration_263366-605.jpg?w=2000",
      image:[{img:'https://st.hzcdn.com/simgs/pictures/bathrooms/bachelor-pad-kns-architects-img~141190ad0ee70e9b_14-4453-1-83be411.jpg'}, {img:'https://www.nobroker.in/blog/wp-content/uploads/2022/08/Small-Bathroom-Ideas.jpg'}, {img:'https://cdn.mos.cms.futurecdn.net/urnQmjBrp6U2nnAqzzf2gb.jpg'}],
      price:'₹5,499/-',
    },
    {
          id:"5",
          title: 'Sofa, etc..',
          title2:'Sofa Seats, Cushions, Curtains, Carpet',
          des1:'5 Sofa Seats + 5 Cushions + Curtains',
          des2:'Duration: 140 minutes',
          des3:'Dry vacuuming and shampooing of 5 sofa seats and cushions',
          des4:'Dry vacuuming of a set of curtains',
          uri: "https://us.123rf.com/450wm/sombrecanari/sombrecanari2008/sombrecanari200800042/153642905-modern-interior-living-room-with-couch-window-and-plants-winter-season-with-snowflakes-stock-vector-.jpg?ver=6",
          image:[{img:'https://blog.luxury-italianfurniture.com/hubfs/Italian-classic-sofa-set-1.jpg'}, {img:'https://www.homelane.com/blog/wp-content/uploads/2022/08/shutterstock_793058929.jpg'}, {img:'https://www.carpetmantra.com/pub/media/wysiwyg/home/Handmade-Carpet.jpg'}],
          price:'₹5,499/-',
          
        },
        {
          id:"6",
          title: 'Car Wash',
          title2:'Car Wash',
          des1:'Door Step Service',
          des2:'Full Exterior Wash',
          des3:'Interior Vacuum, Tyre / Rim Dressing',
          des4:'Floor mats Cleaning, Dashboard Polished',
          des5:'Duration: 30 Mins',
          uri: "https://www.clipartkey.com/mpngs/m/106-1069483_the-works-transparent-background-car-wash-clipart.png",
          image:[{img:'https://autocarspa.files.wordpress.com/2017/03/car-washing.jpg'}],
          price:'₹5,499/-',
         
        },
        
        {
          id:"7",
          title: 'Electricals',
          title2:'Basic electrical installations',
          des1:'Fan installation',
          des2:'Switch installation',
          des3:'New light installation',
          des4:'Jewel light installation',
          des5:'Setting up home appliances  (Home theatre, sound bars, etc..)',
          uri: "https://www.hydroquebec.com/themes/securite/images/maison/situations-dangereuses/fil-brise.jpg",
          image:[{img:'https://applianceanalysts.com/wp-content/uploads/2022/02/ceiling-fan-with-lights.jpg'}, {img:'https://static.toiimg.com/thumb/resizemode-4,msid-91887142,imgsize-22200,width-720/91887142.jpg'}],
          price:'₹5,499/-',
      
        },
      
        {
          id:"8",
          title: 'Plumbing',
          title2:'Basic Plumbing Works',
          des1:'Tap change',
          des2:'Shower knob change',
          des3:'Sink hole fixing',
          uri: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9034/plumber-clipart-md.png",
          image:[{img:'https://thumbs.dreamstime.com/b/plumbing-tools-materials-22001483.jpg'}, {img:'https://www.betterteam.com/images/plumber-job-description-3999x2999-20201118.jpeg'}],
          price:'₹5,499/-',
        },
        {
            id:"9",
            title: 'Home Sanitization',
            title2:'Home Sanitization',
            des1:'Covid Home Sanitization',
            des2:'A fumigation machine is used to spread the chemical which kills harmful viruses and bacteria.',
            des3:'Wiping the high-touch areas such as door handles, switchboards etc',
            uri: "https://dynamicpestcontrol.in/wp-content/uploads/2021/07/senitization-services-for-hospitals-500x500-1.jpg",
            image:[{img:'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/08/home-senitizing-service-500x500-1597729399.jpg'}, {img:'https://5.imimg.com/data5/RV/NN/ZH/SELLER-9926515/htr-image-35700-500x500.jpg'}],
            price:'₹5,499/-',
          },
  ];


export default class Servicesfl extends React.Component {
    render(){
        
        const myItemSeparator = () => {
            return <View style={{ height: 1, backgroundColor: "", marginBottom: 10, marginTop:10}} />;
            };
    return (
        <View style={styles.container}>
        {/* <View style={styles.header}>  
        <View 
        style={{alignSelf:"flex-end",backgroundColor:'#df80ff', borderRadius:10,padding:6,width:38, height:38,marginRight:45, marginTop:35}}
        >
        <Ionicons name='ios-power' size={25} color="white" onPress={() => auth().signOut()}/>
        </View>
        </View> */}

        <Text style={styles.find}>Home Services, based on your need!</Text>
            
         <View style={{marginLeft:16,marginRight:16, marginTop:10}}>
         <FlatList  
           showsHorizontalScrollIndicator={false}
           numColumns={3}
           data={persons}
           renderItem={({ item }) => 
           <TouchableOpacity onPress={() =>this.props.navigation.navigate('DetailPage',  { 
            title:item.title2, image:item.image, price:item.price,  des1:item.des1,  des2:item.des2, des3:item.des3, des4:item.des4, des5:item.des5,})}>
           <View style={styles.view}>
           <View>
           <Image style={styles.image1} source={{ uri: item.uri}} />
           </View>
           <Text style={{ fontSize:14,width:100,fontWeight:'500',textAlign:"center", color:"black"}}>{item.title}</Text>
          </View>
          </TouchableOpacity>
           
        }
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        />
    </View>
    </View>
    
    );
}}
const styles = StyleSheet.create({
    iconsview:{

    },
    view:{
        marginTop:0,
        marginBottom:0,
        marginLeft:0,
        backgroundColor:'white',
        padding:10,
        borderRadius:15,
       
      },
      cardStyle: {
        backgroundColor: '#FFFFFF',
        marginBottom:50
    
      },
      image1: {
        width:100,
        height:100,
        borderRadius:10,
        alignItems:'center',
        alignSelf:'center',
        marginBottom:15
      
      },
    container:{
        flex:1,
        backgroundColor:"white"
        
    },

header:{
    backgroundColor:"#730099",
    height:"15%",
    width:"100%"
},

find:{
     fontSize: 18, 
    //  fontWeight: '700',
    marginTop:25,
    padding:20
    //  marginLeft:25,
    //  marginBottom:50,
    //  color:"black"
},
iconsview:{
    marginTop:28,
    alignSelf:"center",       
},

}
)