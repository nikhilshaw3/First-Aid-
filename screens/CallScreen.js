import React, { Component } from "react";
import {View,StyleSheet,Text,TextInput,Button,Linking,Platform} from "react-native";
import {Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../localdb.json";
import { SafeAreaProvider } from "react-native-safe-area-context";
 
export default class App extends React.Component {
constructor(props) {
super(props);

this.state = {
mobileNo: "",
text: '',
country: ""
};
}

call = (text) => {

  var mobileNo = db[text]["mobileNo"]
  var country=dictionary[text]["country"]

  this.setState({

    "mobileNo": mobileNo,
    "country": country,
})

console.log("+++++++++callNumber ", this.state.mobileNo);

let phoneNumber = this.state.mobileNo;

if (Platform.OS !== "android") {
phoneNumber = `telprompt:${this.state.mobileNo}`;
} else {
phoneNumber = `tel:${this.state.mobileNo}`;
}

Linking.canOpenURL(phoneNumber)
.then(supported => {

if (!supported) {
Alert.alert("Number is not available");
} else {
return Linking.openURL(phoneNumber);
}
})
.catch(err => console.log(err));
};
 
render() {
return (

<View style={styles.container}>

<Header
leftComponent={<Icon name="arrow-left" type="feather" color="#ffffff" onPress={() => this.props.navigation.goBack()} />}
centerComponent={{ text: "Make Call",style: {color: "#ffffff",fontSize: RFValue(20),fontWeight: "bold",},}}backgroundColor="red"
/>
        
<Text style={{ textAlign: "center", fontSize: 20, paddingVertical: 30 }}>Enter the Number to make call</Text>
        
<TextInput
value={this.state.mobileNo}
onChangeText={mobileNo => this.setState({ mobileNo })}
placeholder={"Enter the Emergency number ."}
style={styles.input}
keyboardType={"numeric"}
/>

<View style={{ marginTop: 20 }}>
<Button onPress={this.call} title="Make phone call" />

</View>
</View>
);
}
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderRadius: 0.5,
    borderWidth: 0.5
  }
});