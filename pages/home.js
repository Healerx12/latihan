import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends Component {
handleLogout = async () => {
await firebase.auth().signOut();
this.props.navigation.navigate('Login');
};
render() {
return (
<View style={styles.wrapper}>
<Text>Home</Text>
<Button title="LOGOUT" color="blue" onPress={() => this.props.navigation.navigate('Register')}
/>
         
</View>
);
}
}
const styles = StyleSheet.create({
wrapper: {
height: '100%'
}
});