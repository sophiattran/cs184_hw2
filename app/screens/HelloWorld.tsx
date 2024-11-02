import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

type InvItemProps = {
  item: InvItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

type InvItemData = {
  id: string;
  title: string;
};

const DATA: InvItemData[] = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const InvItem = ({item, onPress, backgroundColor, textColor}: InvItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.invItem, {backgroundColor}]}>
    <Text style={[styles.invText, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function HelloWorld() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: InvItemData}) => {
    const backgroundColor = item.id === selectedId ? '#8ba286' : '#d1dbcd';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <InvItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

    return (
      <View style={styles.titleContainer}>
      <Text style={styles.gardenSection}>placeholder</Text>
      <FlatList
          style={styles.inventorySection}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          horizontal={true}
        />
      <StatusBar style="auto" />
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
    gardenSection: {
      flex: 3,
    },
    inventorySection: {
      flex: 1,
      backgroundColor: '#ededed',
    },
    invItem: {
      backgroundColor: '#d1dbcd', // #d1dbcd
      padding: 20,
      width: 150,
      marginVertical: 16,
      marginHorizontal: 16,
    },
    invText: {
      fontSize: 14,
      fontWeight: 'bold',
    }
  });