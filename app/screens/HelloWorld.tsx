import React from 'react';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';

export default function HelloWorld() {
    return (
      <View style={styles.titleContainer}>
          <Text>Sophia Tran</Text>
      </View>
    );
}

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