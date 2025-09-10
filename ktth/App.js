import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

// You can import supported modules from npm
import React, { useState, useCallback, useMemo } from 'react';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [soHienTai, setSoHienTai] =useState(0);
  const [giaTriD,setGiaTriD] =useState(0);
  const [phepToan, setPhepToan] =useState('');
  const [kq, setKq] =useState(0);

  const handle = (value) => {
    if(soHienTai === 0) setSoHienTai(value)
    else if(giaTriD === 0) setGiaTriD(value)
  }
  const tinhToan = () => {
        if(soHienTai !== 0 && giaTriD !== 0){
          if(phepToan === '-'){
            setKq(soHienTai - giaTriD)
          }
          else if(phepToan === '+'){
            setKq(soHienTai - giaTriD)
          }
          else if(phepToan === '*'){
            setKq(soHienTai - giaTriD)
          }
          else if(phepToan === '/'){
            setKq(soHienTai - giaTriD)
          }
           else if(phepToan === 'X'){
            setKq(0)
          }
        }
  }

  tinhToan()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Caculator</Text>
      <View style={{padding: 10}}>
        <TextInput style={styles.input} keyboardType='numeric'
          value={soHienTai}
        />
        <TextInput style={styles.input} keyboardType='numeric'
          value={giaTriD}
        />
        <TextInput style={styles.input} keyboardType='numeric'
          value={kq}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={handle(1)}
        >
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(2)}
        >
          <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(3)}
        >
          <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(4)}
        >
          <Text style={styles.textButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(5)}
        >
          <Text style={styles.textButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(6)}
        >
          <Text style={styles.textButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(7)}
        >
          <Text style={styles.textButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(8)}
        >
          <Text style={styles.textButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={handle(9)}
        >
          <Text style={styles.textButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={setPhepToan('-')}>
          <Text style={styles.textButton}
          >+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={setPhepToan('+')}>
          <Text style={styles.textButton}
          >-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={setPhepToan('*')}>
          <Text style={styles.textButton}
          
          >*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={setPhepToan('/')}>
          <Text style={styles.textButton}
         
          >/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={setPhepToan('X')}>
          <Text style={styles.textButton}
         
          >X</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5
  },
  buttonContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'black',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
