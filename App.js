/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  //storing number of sections
  const [section, setSection] = useState([1]);
  const [search, setSearch] = useState([])

  const addSection = () => {
    let temp = [...section]
    temp.push(1)
    setSection(temp)
  }

  const numberSearch = () => {
    alert(search * search + 1)
  }

  // a new component for maintaing each lecture name value
  const SectionComponent = React.memo(({ val, index }) => {

    // store number of lecture for each section
    const [lecture, setLecture] = useState([]);


    //storing each value of each input
    function handleChange(i, event) {
      const values = [...lecture];
      values[i].value = event;
      setLecture(values);
    }



    // adding numbers of lectures
    const addLecture = () => {
      let temp = [...lecture]
      temp.push({ value: null })
      setLecture(temp)
    }
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.section}>
            <View style={styles.header}>
              <Text style={styles.sectionText}>Section - {index + 1}</Text>
              <TouchableOpacity style={styles.addButton} onPress={addLecture}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>

            {
              lecture.map((val, index) => {
                return (
                  <View style={styles.sectionContent}>
                    <TextInput onChangeText={e => handleChange(index, e)} style={styles.textInput} placeholder="Lecture-Name" />
                    <TouchableOpacity onPress={() => alert(lecture[index].value)} style={styles.saveButton}>
                      <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />

      <ScrollView>
        <TouchableOpacity style={[styles.saveButton, { marginRight: 10 }]} onPress={addSection}>
          <Text style={styles.saveText}>Add Section</Text>
        </TouchableOpacity>
        {
          section.map((val, index) => {
            return (
              <>
                {
                  <SectionComponent val={val} index={index} />
                }
              </>
            )
          })
        }




        {/* Task 2  */}

        <View style={{ alignItems: 'center', marginTop: '20%' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Task 2</Text>
        </View>


        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TextInput onChangeText={(e) => setSearch(e)} style={styles.textInput} placeholder="Lecture-Name" />
            <TouchableOpacity onPress={numberSearch} style={[styles.saveButton, { marginRight: 10 }]}>
              <Text style={styles.saveText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    width: '93%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    width: '100%'
  },
  sectionContent: {
    width: '100%',
    marginTop: '5%',
  },
  textInput: {
    width: '100%',
    height: 45,
    backgroundColor: '#f4f9f9'
  },
  saveButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: '#02044a',
    marginTop: '5%'
  },
  saveText: {
    color: '#fff'
  },
  sectionText: {
    fontSize: 22
  },
  addText: {
    fontSize: 18
  }
});

export default App;
