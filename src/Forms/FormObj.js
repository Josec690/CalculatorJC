import { Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from './FormStyle';

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("somar");

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite apenas números válidos");
      setResultado(null);
      return;
    }
    
    setErro("");
    
    switch (selectedOperation) {
      case "somar":
        setResultado(n1 + n2);
        break;
      case "dividir":
        if (n2 === 0) {
          setErro("Não é possível dividir por zero");
          setResultado(null);
        } else {
          setResultado(n1 / n2);
        }
        break;
      case "Mult":
        setResultado(n1 * n2);
        break;
      case "sub":
        setResultado(n1 - n2);
        break;
      default:
        setResultado(n1 + n2);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      
      <Text style={styles.subtitle}>Escolha uma operação aritmética:</Text>
      <Picker
        selectedValue={selectedOperation}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedOperation(itemValue)}
      >
        <Picker.Item label="Adição" value="somar" />
        <Picker.Item label="Divisão" value="dividir" />
        <Picker.Item label="Multiplicação" value="Mult" />
        <Picker.Item label="Subtração" value="sub" />
      </Picker>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 1:</Text>
        <TextInput
          style={styles.input}
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
          placeholder="Digite o primeiro número"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 2:</Text>
        <TextInput
          style={styles.input}
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
          placeholder="Digite o segundo número"
        />
      </View>
      
      <Button title="Calcular" onPress={calcular} color="#4e9af1" />
      
      {erro ? <Text style={styles.error}>Erro: {erro}</Text> : null}
      {resultado !== null ? (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      ) : null}
    </View>
  );
};

export default Calculator;