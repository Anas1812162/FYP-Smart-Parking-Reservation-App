import React,{useState,useEffect} from 'react';
import { FlatList,ScrollView,ImageBackground,StyleSheet, Text, View, Button, Image,TouchableOpacity,TextInput, Alert } from 'react-native';
import Task from '../Components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-snap-carousel';
// import locations from '../Components/LocationApi';
 import BannerSlider from '../Components/Slider';
 import locations from '../Components/LocationApi';
import { SIZES, COLORS, FONTS } from '../Components/theme';


export default function Bm({navigation,route}) {
    const [task, setTask] = useState();
    const [taskItems,setTaskItems]= useState(["Parking Club","Meherban Moto Garage"]);
    
   

    
const createBookmark= ()=>{
  if(taskItems==""){
    setTaskItems([...taskItems,task])
    // console.log(task);
    setTask(null);
   
    
   
  }
  else{  Alert.alert("'Already Showing all Bookmarks'");}
 
    
}

const removeBookmark = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const storeData = async taskItems => {
    try {
      const strigifybm = JSON.stringify(taskItems)
      await AsyncStorage.setItem('Bookmarks', strigifybm)
     //console.log(title1)
    } catch (e) {
      console.log(e);// saving error
    }
  }

  const getData = async () => {
    try {
      const bm = await AsyncStorage.getItem('Bookmarks')
      if(bm !== null) {
        setTaskItems(JSON.parse(bm));
      }
    } catch(e) {
      console.log(e);
    }
  }




    return(
      <View style={styles.container1}>
         
           
             <Text style={{ marginTop:30,fontSize: 40, fontWeight:'bold',color:'#e32636'} }  > Bookmarks </Text>
             
             <ScrollView  showsVerticalScrollIndicator={false}>
             <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => removeBookmark(index)} onLongPress={()=>navigation.navigate('Location_Details',{locId:route.params.ID,})}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
              
        </View>
       
         
       
            </ScrollView>
             

            <Text style={{ 
              marginTop:30,
        fontSize: 20,
         fontWeight:'bold',
         color:'#e32636',
         marginBottom:30,
          alignSelf:'center',
          borderBottomWidth:2,
          borderBottomColor:'black'
   } } 
    onPress={createBookmark} > 
                                     Refresh </Text>
             
            
             
             </View>
           
        
    
   
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
  viewcontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    //backgroundColor: '#202121',
   // padding: 20,
    
  
  },
  

  viewcont1:{
    flex:0.6,
    alignItems: 'center',
    justifyContent:'center',
  
    padding: 20,
    
   
  },
  viewcont2:{
    flex:0.4,
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    
   
  },
    container1: {
        flex: 1,
        backgroundColor: '#E8EAED',
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
      tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      
      },
      addText: {},

});