import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList, Button } from 'react-native';

const datasource = [
  {
    data: [
      { key: 'Pikachu', cardnumber: '25' }, { key: 'Voltrob', cardnumber: '100' },
    ],
    title: "Electric",
    bgcolor: "#FFD700" // Gold color for Electric
  },
  {
    data: [
      { key: 'Squirtle', cardnumber: '7' }, { key: 'Wartortle', cardnumber: '8' },
    ],
    title: "Water",
    bgcolor: "#87CEEB" // Light sky blue for Water
  },
  {
    data: [
      { key: 'Charmander', cardnumber: '4' }, { key: 'Charmelon', cardnumber: '5' },
    ],
    title: "Fire",
    bgcolor: "#FF6347" // Tomato color for Fire
  },
];

// How each line/item should look like
const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image
            source={{ uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardnumber}-2x.png` }}
            style={styles.imageStyle}
        />
      </TouchableOpacity>
  );
};

// How each section header should look like
const renderSection = ({ section }) => {
  return (
      <View style={[styles.headerContainer, { backgroundColor: section.bgcolor }]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
  );
}

// What to display in app screen
export default function App() {
  const handleAddPokemon = () => {
    // Placeholder function for adding a Pokemon
    console.log('Add Pokemon button pressed');
  };

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          <Button title="Add Pokemon" onPress={handleAddPokemon} color="#841584" />
        </View>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textStyle: {
    fontSize: 24,
    flex: 1,
    color: '#333',
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  headerContainer: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
