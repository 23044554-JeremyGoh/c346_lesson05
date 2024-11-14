import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FlatList}  from "react-native";


const datasource = [
  {key:'a'}, {key:'b'}, {key:'c'}, {key:'d'}, {key:'e'}, {key:'f'}, {key:'g'},
  {key: 'h'}, {key:'i'}, {key:'j'}, {key:'k'}, {key:'l'}, {key:'m'}, {key:'n'},
  {key: 'o'}, {key:'p'}
]

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={datasource} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 15,
    margin:10,
    textAlign: 'left',
  },
  opacityStyle: {
    borderWidth: 1,
  }
});
