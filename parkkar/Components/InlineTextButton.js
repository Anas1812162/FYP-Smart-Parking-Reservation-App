import {Text, Pressable, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sign_in from '../Screens/Signin';

export default function InlineTextButton(props){
return(
  
    <Pressable onPress={props.onPress}>
        {({pressed})=> (
              <Text style={styles.inlineTextButton}>{props.text}</Text>
        )}
       
    </Pressable>

)

}
const styles=StyleSheet.create({

    inlineTextButton:{
        color: "#e32636"
    },
    pressedinlineTextButton:{
        color: "#e32636",
        opacity: 0.6
    }
})