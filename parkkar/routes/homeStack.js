import { createStackNavigator } from "react-navigation-stack";
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from "react-navigation";
//import { createDrawerNavigator } from 'react-navigation-drawer';
//import Ionicons from '@expo/vector-icons/Ionicons';

import SignUp from "../Screens/Signup";
import signin from "../Screens/Signin";
import Home from "../Screens/home";
import ownerData from "../Screens/OwnerData";
import PL from "../Screens/Parking_Locations";
import splash from "../Screens/Splash";
import adminav from "../Screens/AdminScreen";
import resetPassword from "../Screens/resetPassword";
import tS from "../Screens/testScreen";
import locDetails from "../Screens/locDetails";
import Header from "../Components/header";
import React from 'react';
import showSpots from "../Screens/showSpots";
import user_Profile from "../Screens/userProfile";

const screens = {
    
Welcome:{
    screen: splash,
    navigationOptions:{
        // headerTitle: () => <Header/>,
        // navBarHidden: true,
        headerShown: false,
     },
   
},
    
    Signin:{
        screen: signin,
        navigationOptions:{
           // headerTitle: () => <Header/>,
           // navBarHidden: true,
           headerShown: false,
        },
    },
Signup:{
    screen: SignUp
},

Password_Reset:{
    screen: resetPassword
},



HomeScreen:{
    screen: Home
},

Admin_Screen:{
    screen: adminav
},

Slot_Data:{
    screen: ownerData
},

Parking_Spots:{
     screen: PL,
     navigationOptions:{
        // headerTitle: () => <Header/>,
        // navBarHidden: true,
        headerShown: false,
     },
},

testScreen:{
    screen: tS
},

Location_Details:{
    screen: locDetails,
    navigationOptions:{
        // headerTitle: () => <Header/>,
        // navBarHidden: true,
        headerShown: false,
     },
},

Spots:{
  screen: showSpots,
  navigationOptions:{
    headerShown: false,
 },
},

Profile:{
    screen:user_Profile ,
},

}


const HomeStack = createStackNavigator(screens);
/*const HomeDrawr = createDrawerNavigator({
   Home: {screen:PL,
    navigationOptions:{
        tabBarIcon: ()=> {
            <View>
                <Ionicons style= {[{color: 'red'}]} size={25} name={'home'}/>
            </View>
        }
    }
},
   Slot_Data:{
    screen: ownerData
},
   
  
});*/

export default createAppContainer(HomeStack);