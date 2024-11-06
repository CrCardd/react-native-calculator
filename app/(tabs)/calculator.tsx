import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native';
import Button from '@/components/Button';
import Row from '@/components/Row';
import Calculator, { CalculatorState } from '@/util/Calculator';  

const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const HomeScreen: React.FC = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleTap = (type: string, value?: string | number) => {
    setState((prevState) => Calculator(type as any, value, prevState)); 
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(state.currentValue.toString()).toLocaleString()}
          </Text>

          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => handleTap('clear')}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => handleTap('posneg')}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => handleTap('percentage')}
            />
            <Button
              text="/"
              theme="tertiary"  
              onPress={() => handleTap('operator', '/')}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => handleTap('number', 7)} />
            <Button text="8" onPress={() => handleTap('number', 8)} />
            <Button text="9" onPress={() => handleTap('number', 9)} />
            <Button
              text="x"
              theme="tertiary"  
              onPress={() => handleTap('operator', '*')}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => handleTap('number', 4)} />
            <Button text="5" onPress={() => handleTap('number', 5)} />
            <Button text="6" onPress={() => handleTap('number', 6)} />
            <Button
              text="-"
              theme="tertiary" 
              onPress={() => handleTap('operator', '-')}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => handleTap('number', 1)} />
            <Button text="2" onPress={() => handleTap('number', 2)} />
            <Button text="3" onPress={() => handleTap('number', 3)} />
            <Button
              text="+"
              theme="tertiary" 
              onPress={() => handleTap('operator', '+')}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => handleTap('number', 0)}
            />
            <Button text="." onPress={() => handleTap('number', '.')} />
            <Button
              text="="
              theme="tertiary"  
              onPress={() => handleTap('equal')}
            />
          </Row>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
