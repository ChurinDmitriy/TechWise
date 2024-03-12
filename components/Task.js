import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      
        <BouncyCheckbox
          value={checkboxState}
          onValueChange={setCheckboxState}
          style={styles.checkbox}
          />
        <KeyboardAvoidingView>
          <TextInput style={styles.itemText}>{props.text} </TextInput>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.deleteButton}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
  },
  deleteButton: {
    
  },
  galochka: {
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Task;