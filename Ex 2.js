import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FlatList}  from "react-native";
import {SectionList} from "react-native";


const datasource = [
  {  data:[
      {key:'a'},{key:'e'},{key:'i'},{key:'o'},
    ],
    title: "Vowels",
    bgcolor: "skyblue"
  },
  {
    data:[
      {key:'b'},{key:'c'},{key:'d'},{key:'f'},{key:'g'},{key:'h'},{key:'j'},{key:'k'},
      {key:'l'},{key:'m'},{key:'n'},{key:'p'},
    ],
    title: "Constants",
    bgcolor: "khaki"
  },
];


// how each line/item should look like
const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

//how each section header should look like
const renderSection = ({section}) => {
  return (
      <Text style ={[styles.headerText, {backgroundColor: section.bgcolor}]}>
        {section.title}
      </Text>
  );
}

//What to display in app screen
export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
          sections={datasource}
          renderItem={renderItem}
          renderSectionHeader={renderSection}/>
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
  },
  headerText:{
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
