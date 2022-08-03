import React,{useEffect,useState} from 'react';
import { FlatList,ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput } from 'react-native';
import locations from '../Components/LocationApi';
import { SIZES, COLORS, FONTS } from '../Components/theme';
import { Ionicons,Foundation } from "@expo/vector-icons";
import { auth,db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc,query,where } from "firebase/firestore"; 

export default function AdminCreateMarker({navigation}) {

const [datainfo,setdatainfo] = React.useState([]);
//const colRef = collection(db, 'spots')


useEffect(async()=>{
     /*await getDocs(colRef)
    .then((snapshot)=>{
        const info = []
        snapshot.docs.forEach((doc)=>{
            info.push({ ...doc.data(),id: doc.id}) 
           })
          // console.log(info);
           setdatainfo(info);
    })*/
    const q = query(collection(db, "spots"), where("marker", "==", "not created"));
    const querySnapshot = await getDocs(q);
    let info=[];
     querySnapshot.forEach((doc) => {
   info.push({...doc.data(), id: doc.id});
})
setdatainfo(info);
});





  function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', height: 50,marginTop:10,marginBottom:30 }}>
            

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: "100%",
                        backgroundColor:'#2d2e2d',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        
                    }}
                >
                    <Text style={{ ...FONTS.h3 ,color:"#e32636",}}>Markers to be Added</Text>
                </View>
            </View>

            
        </View>
    )
}




function renderRestaurantList() {
    
  const renderItem = ({ item }) => (
    
      <TouchableOpacity
          style={{ marginBottom: SIZES.padding * 2 }}
          //onLongPress={DeleteDocument.bind(this, item.id)}
         // onPress={() => navigation.navigate('Update Spot',{updateId:item.id,})}
          
      >
          {/* Image */}
          <View
              style={{
                  marginBottom: SIZES.padding
              }}
          >
              <Image
                  source={{uri:item.Imageurl}}
                  resizeMode="cover"
                  style={{
                      width: "100%",
                      height: 200,
                      borderRadius: SIZES.radius
                  }}
              />

              <View
                  style={{
                      position: 'absolute',
                      bottom: 0,
                      height: 50,
                      width: SIZES.width * 0.3,
                      backgroundColor: COLORS.white,
                      borderTopRightRadius: SIZES.radius,
                      borderBottomLeftRadius: SIZES.radius,
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...styles.shadow
                  }}
              >
                  <Text style={{ ...FONTS.h4 }}>{item.Timings}</Text>
              </View>
          </View>

          {/* Restaurant Info */}
          <Text style={{ ...FONTS.body2 }}>{item.Title}</Text>
         

          <View
              style={{
                  marginTop: SIZES.padding,
                  flexDirection: 'row'
              }}
          >
              {/* Rating */}
              <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
              <Ionicons name="star" size={20} color="orange"
                  style={{
                      height: 20,
                      width: 20,
                      tintColor:  "orange",
                      marginRight: 10
                  }}/>
                  <Ionicons name="star" size={20} color="orange"
                  style={{
                      height: 20,
                      width: 20,
                      tintColor:  "orange",
                      marginRight: 10
                  }}/>
                  <Ionicons name="star" size={20} color="orange"
                  style={{
                      height: 20,
                      width: 20,
                      tintColor: "orange",
                      marginRight: 10
                  }}/>
                  <Ionicons name="star" size={20} color="orange"
                  style={{
                      height: 20,
                      width: 20,
                      tintColor: "orange",
                      marginRight: 10
                  }}/>
                  <Ionicons name="star" size={20} 
                  style={{
                      height: 20,
                      width: 20,
                      tintColor: "orange",
                      marginRight: 10
                  }}/>
                 
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                4.0
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: -183,marginTop:10}}>
                {'\n'}Price: {item.Price}
              </Text>
            </View>
                   
              
             

              
                </View>
                
                
      </TouchableOpacity>
  )

  return (
      <FlatList
      showsVerticalScrollIndicator={false}
     // keyExtractor={(item) => item.id}
      data={datainfo}
      renderItem={renderItem}
      
          contentContainerStyle={{
              //paddingHorizontal: SIZES.padding * 2,
              paddingBottom: 30,
              paddingRight:30,
              width:360

          }}
      />
  )
}







    return(
      <View style={styles.viewcontainer}>
        {renderHeader()}
        {renderRestaurantList()}
                 
      </View>
    )
}


const styles=StyleSheet.create({

    viewcontainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'flex-start',
      padding: 20,
      
    
    },
    

    viewcont1:{
      flex:0.6,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      borderWidth:1
     
    },
    viewcont2:{
      flex:0.3,
      alignItems: 'center',
      justifyContent:'center',
      padding: 20,
      borderWidth:1
     
    },


    tinyLogo: {
        marginTop:212,
        width: 400,
        height: 300,
        alignItems: 'center',
      },
      txtinp:
      {
       padding: 10,
       borderWidth: 4,
       borderColor:'#8d8f8e',
       margin: 5,
       color:'#c5c7c6',
       fontSize: 20,
       width: 250
      
      },

      touchable:
      {
       color:'#e32636',
       borderColor:'#c5c7c6',
       borderWidth:4,
       borderRadius: 4,
       fontSize:25,
       backgroundColor: '#202121',
       //textDecorationLine:'underline',
       marginTop:60,
       fontWeight:'bold',
       
       paddingTop:10,
       paddingBottom:10,
       paddingLeft:40,
       paddingRight:40
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      container: {
        flex: 1,
      },

});