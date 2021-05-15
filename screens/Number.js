import React, { Component } from "react";
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,Linking,Platform} from "react-native";
import MyHeader from '../components/MyHeader.js'
import { ListItem ,Icon} from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context'


export default class NumberScreen extends Component{

render(){
return(
<SafeAreaProvider style={styles.view}>
<MyHeader title="Emergency Numbers" navigation={this.props.navigation}/>

<ScrollView>

<ListItem
title={"India - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("CallingScreen")}}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"United States of America - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Afghanistan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
  
bottomDivider
/>

<ListItem
title={"Bahrain - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Bangladesh - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Bhutan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Brunei - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Myanmar - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Cambodia - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"People's Republic of China - 120"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Christmas Island - 000"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Cocos Islands - 000"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"East Timor - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Hong Kong - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Indonesia - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Iran - 115"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Iraq - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Israel - 101"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Japan - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Jordan - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Kazakhstan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Kyrgyzstan - 103"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Republic of Korea - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Kuwait - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Laos - 195"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Lebanon - 140"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Macau - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Maldives - 102"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Malaysia - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Mongolia - 105"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Nepal - 102"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Oman - 102"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Philippines - 911"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Qatar - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Saudi Arabia - 911"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Singapore - 995"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Sri Lanka - 110"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Syria - 110"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Republic of China - 119"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Tajikistan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Thailand - 1669"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Turkmenistan - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"United Arab Emirates - 999"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Uzbekistan - 101"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Vietnam - 115"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Yemen - 191"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Antarctica - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
bottomDivider
/>

<ListItem
title={"Bermuda - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Canada - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Mexico - 991"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>

<ListItem
title={"Saint Pierre and Miquelon - 112"}
titleStyle={{ color: "black", fontWeight: "bold"}}
numberOfLines ={1}
leftElement={<Icon name="phone" type ="font" />}
rightElement={
  <TouchableOpacity style={styles.button}>
  <Text style={{ color: "white" , fontWeight: 'bold'}}>Call</Text>
  </TouchableOpacity>
  }
bottomDivider
/>




</ScrollView>
</SafeAreaProvider>
)
}
}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      borderRadius: 20,
      borderWidth:2
    },
    view:{
      flex: 1,
      backgroundColor: "white"
    },
    santaImage:{
        width:"70%",
        height:"40%",
        resizeMode:"stretch",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
      },
  });