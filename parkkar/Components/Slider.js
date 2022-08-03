import React,{useState,useEffect} from 'react';
import { FlatList,ScrollView,ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput, Alert } from 'react-native';
import locations from '../Components/LocationApi';
import { SIZES, COLORS, FONTS } from '../Components/theme';

export default function BannerSlider({navigation}){
    const ItemView =({item})=>{
        return(

            <View style={styles.container}>
                <TouchableOpacity
                 onPress={() => navigation.navigate('Location_Details',{locId:item.id,})} >
                     <Image
                  source={item.pic}
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
                      ...styles.shadow
                  }}
              >
                
                  <Text style={{ fontSize:16,lineHeight:22}}>{item.timings}</Text>
              </View>
              
               
            </View>
        )
    }
return(
    <FlatList
    horizontal={true}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      data={locations}
      renderItem={ItemView}
      
        
      />
)
}
const styles=StyleSheet.create({
 container:{
   // flexDirection: 'row',
    justifyContent:"space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 20,
   // marginTop: 40
 },








});