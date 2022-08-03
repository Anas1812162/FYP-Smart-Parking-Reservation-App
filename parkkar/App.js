
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from "./Screens/Signup";
import Signin from "./Screens/Signin";
import Home from "./Screens/home";
import OwnerData from "./Screens/OwnerData";
import PL from "./Screens/Parking_Locations";
import UserData from './Screens/UserData';
import Splash from "./Screens/Splash";
import ResetPassword from "./Screens/resetPassword";
import LocDetails from "./Screens/LocDetails";
import UpdateSpot from './Screens/UpdateSpot';
import BookMark from './Screens/Bookmark';
import Bookeddata from './Screens/Booked';
import AdminSign_in from './Screens/AdminLogin';
import Request_Update from './Screens/UpdateRequestAdmin';
import React from 'react';
import Showspots from "./Screens/showSpots";
import ShowSpots2 from './Screens/ShowSpots2';
import TestDet from "./Screens/testDetails"
import User_profile from "./Screens/userProfile";
import Bm from './Screens/BM';
import Favor from './Screens/Favourates';
import AdminCreateMarker from './Screens/admincreateMarker';

import { StyleSheet, Text, View,Image } from 'react-native';
import {Ionicons,FontAwesome,Entypo, MaterialCommunityIcons,FontAwesome5} from "@expo/vector-icons";
import 'react-native-gesture-handler';
import Booked from './Screens/Booked';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomDrawer from './Components/CustomDrawer';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer= createDrawerNavigator();



const globalScreenOption ={
  headerStyle: {backgroundColor:'#2d2e2d'},
  headerTintColor:"#e32636",
  headerTitleStyle: {color:'white', paddingLeft:50},
  drawerActiveBackgroundColor:'#2d2e2d' ,
 // drawerInactiveBackgroundColor:'#2d2e2d' ,
  drawerActiveTintColor: '#e32636',
}
// 

const HomeDrawer = ()=>{
  return(
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={globalScreenOption}>
    <Drawer.Screen component={PL} name="Parking Spots" options={{headerShown:true,
    drawerIcon: ({color}) =>{
      <Ionicons name="home-outline" size={22} color={'black'}/>
    }
    
    
    }}/>
    <Drawer.Screen component={Bookeddata} name="Booked"options={{headerShown:false}}/>
    <Drawer.Screen component={ShowSpots2} name="Spots"options={{headerShown:true,headerTitleStyle: {color:'white', paddingLeft:90}} }/>
    <Drawer.Screen component={Favor} name="Favourates"options={{headerShown:true,headerTitleStyle: {color:'white', paddingLeft:70}} }/>
    <Drawer.Screen component={UserData} name="Your Parking Spots"options={{headerShown:true,headerTitleStyle: {color:'white', paddingLeft:30}} }/>
    <Drawer.Screen component={User_profile} name="Profile"options={{headerShown:true,headerTitleStyle: {color:'white', paddingLeft:90}} }/>
    <Drawer.Screen component={OwnerData} name="Create Spot"options={{headerShown:false}}/>


    </Drawer.Navigator>
  );
}

const HomeStack= ()=>{
  return (
    
      
    <Stack.Navigator>
  
    <Stack.Screen component={HomeDrawer} name="Parking_Spots"options={{headerShown:false}}/>
    <Stack.Screen component={LocDetails} name="Location_Details"options={{headerShown:false}}/>
    <Stack.Screen component={Showspots} name="Spots"options={{headerShown:false}}/>
    <Stack.Screen component={User_profile} name="Profile"options={{headerShown:false}}/>
    <Stack.Screen component={UpdateSpot} name="Update Spot"options={{headerShown:false}}/>
    <Stack.Screen component={UserData} name="Your Parking spots"options={{headerShown:false}}/>
    <Stack.Screen component={TestDet} name="Location Details"options={{headerShown:false}}/>
    <Stack.Screen component={OwnerData} name="Slot_Data"options={{headerShown:false}}/>
    <Stack.Screen component={BookMark} name="BookMark"options={{headerShown:false }}/>
    <Stack.Screen component={Bm} name="BookMarks"options={{headerShown:false}}/>
    
    </Stack.Navigator>

    
  );
}
const HomeDrawer1 = ()=>{
  return(
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props}/>} screenOptions={globalScreenOption}>
    <Drawer.Screen component={Home} name="Admin Panel"options={{headerShown:true}}/>
    <Drawer.Screen component={Request_Update} name="User Spot Update Requests"options={{headerShown:true}}/>
    <Drawer.Screen component={AdminCreateMarker} name="Marker Requests"options={{headerShown:true}}/>
    


    </Drawer.Navigator>
  );
}


const StackNavigator = ({ navigation, route }) =>{
  
   /* React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "Admin Panel"){
          navigation.setOptions({tabBarStyle: {display: 'none'}});
        } else {
        navigation.setOptions({ tabBarStyle: {
          backgroundColor:'#e32636',
          borderRadius: 25,
          //position: 'absolute',
          
          //bottom: 5,
         // marginTop: 30,
      
      },
      tabBarInactiveTintColor: '#fff',
      tabBarActiveTintColor:'black',

      });
       }
    }, [navigation, route]);*/
  return (
    
    <NavigationContainer>  
    <Stack.Navigator>
    <Stack.Screen component={Splash} name="Welcome" options={{headerShown:false}}/>
    <Stack.Screen component={Signin} name="Signin"options={{headerShown:false}}/>
    <Stack.Screen component={SignUp} name="SignUp"options={{headerShown:false}}/>
    <Stack.Screen component={AdminSign_in} name="Admin Signin"options={{headerShown:false}}/>
    <Stack.Screen component={HomeDrawer1} name="Admin Panel"options={{headerShown:false}}/>
    <Stack.Screen component={Request_Update} name="Update Request"options={{headerShown:false}}/>
    <Stack.Screen component={ResetPassword} name="Password_Reset"options={{headerShown:false}}/>

    <Stack.Screen component={TabNavigator} name="Parking_Spots"options={{headerShown:false}}/>
   
    </Stack.Navigator>
</NavigationContainer>
    
  );
}

const TabNavigator= ({ navigation, route })=>{
  

  return(
   

      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle: {backgroundColor:'#e32636'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor:'black'
        
      }}>
       <Tab.Screen component={HomeStack} name="Parking_Spots" options={{
         
         tabBarIcon: ({color,size})=>(
           <Ionicons name='ios-home' color={color} size={size}/>
  )
       }}/>
       <Tab.Screen component={ShowSpots2} name="Spots"options={{
        
         tabBarIcon: ({color,size})=>(
          <Ionicons name="ios-car-sport" color={color} size={size}  />
  )
       }}/>
       <Tab.Screen component={User_profile} name="Profile" options={{
       
         tabBarIcon: ({color,size})=>(
           <FontAwesome name='user-circle' color={color} size={size}/>
  )
       }}/>


      </Tab.Navigator>







    

  );
}
console.disableYellowBox = true;
export default StackNavigator;
