import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, Platform, View, Text, Button } from 'react-native';
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Home = ({navigation}: RouterProps) => {
    const user = FIREBASE_AUTH.currentUser;
    
    return (
      <View style={styles.titleContainer}>
        {user ? (<Text>user: {user.email}</Text>) : (<Text>user not found</Text>)}
          
          <Button onPress={() => navigation.navigate("helloworld")} title="Hello World" />
      </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    reactLogo: {
      height: 0,
      width: 0,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });