import React,{useCallback, useRef, useState,useEffect} from 'react';
import { ScrollView,FlatList,Dimensions,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput,StatusBar } from 'react-native';
import MapView,{Marker, Callout,OverlayComponent,Circle} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { sendEmailVerification } from 'firebase/auth';
import locations from '../Components/LocationApi';
import { SIZES, COLORS, FONTS } from '../Components/theme';
import { Ionicons,Foundation } from "@expo/vector-icons";
import { auth,db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore"; 


//const height = Dimensions.get('screen').height
const homePlace = {
  description: 'Saddar',
  geometry: { location: { lat:24.831184500766764, 
    lng:67.03756475886472  } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const Imtiaz = {
  description: 'Imtiaz Super Market Nazimabad no #4',
  geometry: { location: { lat: 24.918890774565256, lng:67.03217569716989 } },
};
 

const OceanMall = {
  description: 'Block 9 Clifton, Karachi, Karachi City, Sindh 75600 Pakistan',
 
  geometry: { location: { lat: 24.823854743200577, lng:67.03536795445999 } },
};

 

 

const PL=({navigation})=> {
/* const [datainfo,setdatainfo]= React.useState([])
 
  const colRef = collection(db, 'spots')
  
  useEffect(async()=>{
   
        getDocs(colRef)
        .then((snapshot)=>{
            const info = []
        //    const title = null;
            snapshot.docs.forEach((doc)=>{
                info.push({ ...doc.data(),id: doc.id}) 
                
  
               })
               
               setdatainfo(info);
               console.log(info);
               
        })
   
      })*/
 


  //____________________________________________________________________

const [region,setregion] = React.useState({
  latitude: 24.911024655590364, 
      longitude:  67.03123760048994, 
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
})
let showsendemail=()=>{
  return(
    <View style={{alignSelf:"center",marginTop:120}}>
      <Text>Please verify your email first </Text>
      <Button title="Send Verification Email" onPress={()=> sendEmailVerification(auth.currentUser)}/>
    </View>
  )
 }

 let showContent=()=>{
  const [datainfo,setdatainfo] = React.useState([]);
  return(
    <View styles={styles.container}>
    <GooglePlacesAutocomplete
    placeholder='Search'
    fetchDetails={true}
    GooglePlacesSearchQuery={{
      rankby: "distance"
    }}
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details)
      setregion({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })

    }}
    query={{
      key: 'AIzaSyDJX42TeeNoR-uSY8Y2EsxkklIWWjMYmU4',
      language: 'en',
      radius: 30000,
      location:`${region.latitude},${region.longitude}`
    }}

    predefinedPlaces={[homePlace, workPlace,Imtiaz,OceanMall]}
    styles={{
    container: {flex:0, position: "absolute", width: "100%", zIndex: 10,paddingTop:20,paddingLeft:20,paddingRight:20},
    listView: {backgroundColor: 'white'}
    }}
 />
      <MapView
      style={{
      //  marginTop:-90,
      marginBottom:80,
      //  ...StyleSheet.absoluteFillObject,
       width:"100%",
      height:"93%"

       


      }}
     
  region={{
    latitude: region.latitude, 
    longitude: region.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>

<Circle center={{
latitude: region.latitude, 
longitude: region.longitude,
}} radius={300} strokeColor={'#e32636'} strokeWidth={2}/>
    <Marker coordinate={{
      
  latitude:24.810419027684883,
  longitude:67.04785094341604
 
       }}
       style={styles.tinylogo2 }
       title={"Sharjeel Home Garage"}
       image={require('../assets/map_marker.png')}/>

<Marker coordinate={{
      
      latitude:24.911491726240776,
      longitude:67.03080844702531
     
           }}
           style={styles.tinylogo2 }
           title={"Memon Garage"}
           image={require('../assets/map_marker.png')}
           onPress={() => navigation.navigate('Location Details',{Heading:"Memon Garage",pr:"100 Rs/h",time:"9am-2am",addr:"Nazimabad #4,block C 2/4",
           desc:"A big place for a large sedan or an suv can park here for desired time at reasonable price",
           imurl:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fparkkar-d79a9ed3-b096-43bf-afad-800f327cf780/ImagePicker/34e98164-f66c-40dc-8c99-23042f7b8937.jpg",})}/>

<Marker coordinate={{
      
      latitude:24.861961886933752, 
      longitude:67.02893333041644
     
           }}
           style={styles.tinylogo2 }
           title={"Faizan Home Garage"}
           image={require('../assets/map_marker.png')}/>


<Marker coordinate={{
      
      latitude:24.831184500766764, 
      longitude:67.03756475886472 
     
           }}
           style={styles.tinylogo2 }
           title={"Torque Motorsports"}
           image={require('../assets/map_marker.png')}
           onPress={() => navigation.navigate('Location Details',{Heading:"Torque Motorsports",pr:"60 Rs/h",time:"9am-2am",addr:"Clifton,Phase V,Karachi",
           desc:"A big place for a large sedan or an suv can park here for desired time at reasonable price",
           imurl:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fparkkar-d79a9ed3-b096-43bf-afad-800f327cf780/ImagePicker/3bbf75ea-b090-4e79-8e78-fb78c55e317f.jpg",})}/>

           

             

<Marker coordinate={{
      
      latitude:24.872893024805954, 
      longitude:67.06056429762482
     
           }}
           style={styles.tinylogo2 }
           title={"Private Parking Plaza"}
           image={require('../assets/map_marker.png')}
           //onPress={() => navigation.navigate('Location_Details',{locId:'3',})}
           />

<Marker coordinate={{
      
      
      latitude:24.796835141898423, 
      longitude:67.06212118762409
     
           }}
           style={styles.tinylogo2 }
           title={"Meherban Moto Garage"}
           image={require('../assets/map_marker.png')}
           onPress={() => navigation.navigate('Location Details',{Heading:"Meherban Moto Garage",pr:"90 Rs/h",time:"9am-2am",addr:"Defense,Phase V,Karachi",
           desc:"A big place for a large sedan or an suv can park here for desired time at reasonable price",
           imurl:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fparkkar-d79a9ed3-b096-43bf-afad-800f327cf780/ImagePicker/c0cbc71e-5be0-4f4d-87cd-24e62c343296.jpg",})}/>

<Marker coordinate={{
      
      latitude:24.83456929017575, 
      longitude:67.03512311940379
     
           }}
           style={styles.tinylogo2 }
           title={"Parking Club"}
           image={require('../assets/map_marker.png')}
           onPress={() => navigation.navigate('Location Details',{Heading:"Parking Club",pr:"60 Rs/h",time:"9am-2am",addr:"Clifton ,Teen Talwar",
           desc:"A big place for a large sedan or an suv can park here for desired time at reasonable price",
           imurl:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fparkkar-d79a9ed3-b096-43bf-afad-800f327cf780/ImagePicker/bf94513b-aac8-439c-8c41-a1e13d11348f.jpg",})}/>

<Marker coordinate={{
      
      latitude:24.918472382288055, 
      longitude: 67.03315202119668 
     
           }}
           style={styles.tinylogo2 }
           title={"Haqeeqat Home Garage"}
           image={require('../assets/map_marker.png')}
          // onPress={() => navigation.navigate('Location_Details',{locId:'6',})}
           />


<Marker coordinate={{
      
      latitude:24.91851130255977, 
      longitude: 67.03339878441227  
     
           }}
           style={styles.tinylogo2 }
           title={"Tehzeeb Home Garage"}
           image={require('../assets/map_marker.png')}
          // onPress={() => navigation.navigate('Location_Details',{locId:'7',})}
           />





          

           <Marker coordinate={{
      
      latitude: 24.823371338606844,
      longitude:  67.0355518337474
       
           }}
           style={styles.tinylogo2 }
           title={"Shehzaad Parking Palace"}
           image={require('../assets/map_marker.png')}
          // onPress={() => navigation.navigate('Location_Details',{locId:'10',})}
          />

</MapView>

 
     
              
  
   

<TouchableOpacity
style={styles.touchableOpacity}
onPress={() => navigation.navigate('Slot_Data')}
>
  <Image
  style={styles.floatingBtn}
   source={{
     uri :"https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-plus-100-most-used-icons-flaticons-flat-flat-icons.png"
          }}
          />
          
   </TouchableOpacity>
   </View>

  )
 }



    return(
      
      
     
      
      <View styles={styles.container}>
  
        
        {auth.currentUser.emailVerified ? showContent() : showsendemail()}


     
     
  
  
  
  
  </View>
  
  


 
  
      
    )
}


const styles=StyleSheet.create({
  
  container:{
   // ...StyleSheet.absoluteFillObject,
  // marginTop:50, 
   flex:1
  },

  touchableOpacity:{
    position:'absolute',
    width: 50,
    height:50,
    alignItems:'center',
    justifyContent: "center",
    right:20,
    bottom:100
  },

  floatingBtn:{
    resizeMode: 'contain',
    width:100,
    height:70,
    marginTop:-60
    
  },

  header:{
     backgroundColor: '#FFFFFF',
     shadowColor: '#333333',
     shadowOffset: {width: -1, height: -3},
     shadowRadius: 2,
     shadowOpacity: 0.4,
     paddingTop: 20,
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
  },

  panelHeader:{
    alignItems: 'center',
  },

  panelHandle:{
      width: 40,
      height: 0,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
  },
  container1:{
    // ...StyleSheet.absoluteFillObject,
     flex:1,
     backgroundColor:"#293231",
     justifyContent:"center"
 
   },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },

  searchbox:{
   // ...StyleSheet.absoluteFillObject,
   position:'absolute',
   marginTop: Platform.OS === 'ios' ? 40 : 20,
   flexDirection:'row',
   backgroundColor:'#fff',
   width: '90%',
   alignSelf: 'center',
   borderRadius: 5,
   padding: 10,
   shadowColor: '#ccc',
   shadowOffset: {width:0, height: 3},
   shadowOpacity:0.5,
   shadowRadius: 5,
   elevation: 10,

  },
  txtinp:
      {
        position:'absolute',
   marginTop: Platform.OS === 'ios' ? 40 : 20,
   flexDirection:'row',
   backgroundColor:'#fff',
   width: '90%',
   alignSelf: 'center',
   borderRadius: 5,
   padding: 10,
   shadowColor: '#ccc',
   shadowOffset: {width:0, height: 3},
   shadowOpacity:0.5,
   shadowRadius: 5,
   elevation: 10,
      },

    tinylogo2:{
       width:100,
       height:50
    },

    logo:{
      width: 300,
      height: 150,
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    tinyLogo: {
       
       // height
      },
      bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
      },
      // Arrow below the bubble
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -12,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
      },
      // Character name
      name: {
        fontSize: 16,
        marginBottom: 5,
      },
      // Character image
      image: {
        width: "100%",
        height: 80,
      },
});
export default PL