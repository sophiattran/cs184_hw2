import { View, Text, TextInput, StyleSheet, ActivityIndicator, Button } from "react-native";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            console.log(error);
            alert("Sign in failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert("Check your email!");
        } catch(error: any) {
            console.log(error);
            alert("Registration failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.titleContainer}> 
            <TextInput value={email} style={styles.input} placeholder="email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

            { loading ? (<ActivityIndicator size="large" color="000ff"/>)
            : (<>
                <Button title="Login" onPress={signIn} />
                <Button title="Create account" onPress={signUp} />
               </>
            )}
        </View>
        
    );
};

export default Login;

const styles = StyleSheet.create({
    titleContainer: {
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
  });