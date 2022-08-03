import { FlatList,ImageBackground,ScrollView,StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React,{useEffect} from "react";
import locations from "../Components/LocationApi";
import { Ionicons,Foundation } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { SIZES, COLORS, FONTS } from '../Components/theme';
import { auth,db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

 const LocDetails = ({navigation,route})=>{

  
    //For Horizontal list:
 const [datainfo,setdatainfo] = React.useState([]);
 const colRef = collection(db, 'spots')
 
 useEffect(async()=>{
      await getDocs(colRef)
     .then((snapshot)=>{
         const info = []
         snapshot.docs.forEach((doc)=>{
             info.push({ ...doc.data(),id: doc.id}) 
            })
            setdatainfo(info);
     })
 })
 
     const ItemView =({item})=>{
       return(
 
           <View style={style.container}>
               <TouchableOpacity
                 onPress={() => navigation.navigate('Location Details',{locId:item.id,
                     imurl:item.Imageurl, time: item.Timings, Heading: item.Title, desc: item.description, addr: item.address, pr:item.Price})} >
                    <Image
                 source={{uri:item.Imageurl}}
                 resizeMode="cover"
                 style={{
                     width: 300,
                     height: 160,
                     borderRadius: 30
                 }}
             />
             </TouchableOpacity>
             
              <View
                 style={{
                    // position: 'absolute',
                     bottom: 0,
                     height: 50,
                     width: SIZES.width * 0.3,
                     marginTop:-50,
                     backgroundColor: COLORS.white,
                     borderTopRightRadius: SIZES.radius,
                     borderBottomLeftRadius: SIZES.radius,
                     alignItems: 'center',
                     justifyContent: 'center',
                     ...style.shadow
                 }}
             >
               
                 <Text style={{ fontSize:16,lineHeight:22}}>{item.Timings}</Text>
             </View>
             <Text style={{ ...FONTS.body2 }}>{item.Title}       {item.Price}</Text>
             
              
           </View>
       )
   }
     

  
     //--------------------------------------------
     //const id = navigation.getParam('locId');
     const id= route.params.locId;
     console.log(id);
     //let title1;

     const selectedlocation = locations.find((element) => {
        return id === element.id;
      });
 

 



      
     return (

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={selectedlocation.pic}>
        <View style={style.header}>
          <Ionicons
            name="arrow-back-sharp"
            size={28}
            color="white"
            onPress={() => navigation.navigate("Parking_Spots")}
          />
         <Ionicons 
         name="ios-bookmark-sharp" 
         size={24} 
         color="white"
        
         
        
         />
         {/*'Location_Details',{locId:'2',}  onPress={storeData} */}
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer} >
        <Foundation name="marker" size={24} color="white"onPress={() => navigation.navigate("Spots")} />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{selectedlocation.title}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: "grey",
              marginTop: 5,
            }}>
            {selectedlocation.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name="star" size={20} color='orange' />
                <Ionicons name="star" size={20} color='orange' />
                <Ionicons name="star" size={20} color='orange' />
                <Ionicons name="star" size={20} color='orange' />
                <Ionicons name="star" size={20} color='orange' />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
              
            </View>
            <Text style={{fontSize: 13,  color: "grey",}}>365reviews</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20,  color: "grey",}}>
              {selectedlocation.descript}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per hour
          </Text>
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: "grey",
                marginLeft: 5,
              }}>
              {selectedlocation.price}
            </Text>
           
          </View>
        </View>
        <View style={style.btn}>
          <Text style={{color: "white", fontSize: 18, fontWeight: 'bold'}}
           onPress={() => navigation.navigate('Parking_Spots')}
          >
            Book Now
          </Text>
        </View>

        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop:30,marginLeft:22}}>You May also Like</Text>

        <FlatList
    horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={datainfo}
      renderItem={ItemView}
      
        
      />
      </View>
      
    </ScrollView>

      
     
       
      
     );
 };

 const style = StyleSheet.create({
  container:{
    // flexDirection: 'row',
     justifyContent:"space-between",
     paddingHorizontal: 20,
     paddingVertical: 30,
     margin: 20,
    // marginTop: 40
  },
    mainContainer: {
      // backgroundColor: "red",
      paddingHorizontal: 20,
    },

    viewcontainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'flex-start',
      padding: 20,
      backgroundColor:'black'
      
    
    },

    viewcontainer1:{
      flex:0.4,
      alignItems: 'center',
      justifyContent:'flex-start',
      padding: 20,
      backgroundColor:'black'
      
    
    },

    viewcontainer2:{
      flex:0.6,
      alignItems: 'center',
      justifyContent:'flex-start',
     // padding: 20,
    // paddingLeft:70,
    // paddingRight:70,
    width:370,
     borderTopLeftRadius:25,
     borderTopRightRadius:25,
     borderBottomLeftRadius:25,
     borderBottomRightRadius:25,
      backgroundColor:'white'
      
    
    },

    courseContainer: {
      // height: "50%",
      // display: "flex",
      padding: 30,
      backgroundColor: "rgba(255, 255, 255, 0.90)",
      textAlign: "center",
      borderRadius: 5,
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 30,
    },
  
    cardImage: {
      width: "100%",
      display: "flex",
      alignSelf: "center",
      height: undefined,
      aspectRatio: 1,
    },
  
    mainHeader: {
      fontSize: 22,
      color: '#e32636',
      textTransform: "uppercase",
      fontWeight: "900",
      paddingTop: 50,
      paddingBottom: 15,
      
      //fontFamily: "JosefinSans_500Medium",
      textAlign: "center",
    },
  
    subHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      paddingBottom: 15,
     // fontFamily: "JosefinSans_500Medium",
      textAlign: "center",
    },
  
    description: {
      textAlign: "center",
      fontSize: 16,
      color: "black",
      paddingBottom: 20,
     // paddingVertical: 10,
     // fontFamily: "JosefinSans_300Light",
      lineHeight: 20,
    },

    description1: {
      textAlign: "center",
      fontSize: 16,
      color: "black",
      paddingBottom: 20,
      paddingVertical: 14,
      marginLeft:82,
      //paddingLeft: -60,
     // fontFamily: "JosefinSans_300Light",
      lineHeight: 20,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: -20,
    },
  
    price: {
      backgroundColor: "white",
      color: '#e32636',
      paddingVertical: 10,
      paddingHorizontal: -25,
      display: "flex",
      //justifyContent: "center",
      //alignItems: "center",
      borderBottomLeftRadius: 1,
      borderTopLeftRadius: 1,
      fontSize: 18,
    //  fontFamily: "JosefinSans_400Regular",
      //textAlign: "left",
     // paddingLeft: -90,
    },

    timing: {
      backgroundColor: "white",
      color: '#e32636',
      paddingVertical: 10,
      //paddingHorizontal: -120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 1,
      borderTopLeftRadius: 1,
      fontSize: 18,
    //  fontFamily: "JosefinSans_400Regular",
     // textAlign: "left",
      marginRight: -62,
    },
    buttonStyle: {
      backgroundColor: "#809fff",
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 60,
      marginRight:60,
    },
    buttonText: {
      fontSize: 20,
      color: "#eee",
     // fontFamily: "JosefinSans_400Regular",
    },
    tinyLogo: {
      width: 350,
      height: 300,
      marginTop: 10,
      marginBottom: 30
      
    },

    btn: {
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      backgroundColor: '#e32636',
      marginHorizontal: 20,
      borderRadius: 10,
    },
  
    priceTag: {
      height: 40,
      alignItems: 'center',
      marginLeft: 40,
      paddingLeft: 20,
      flex: 1,
      backgroundColor: '#e0f4f1',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      flexDirection: 'row',
    },
    iconContainer: {
      position: 'absolute',
      height: 60,
      width: 60,
      backgroundColor: '#e32636',
      top: -30,
      right: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerImage: {
      height: 400,
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
      overflow: 'hidden',
    },
    header: {
      marginTop: 60,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      justifyContent: 'space-between',
    },
  });

 export default LocDetails

 