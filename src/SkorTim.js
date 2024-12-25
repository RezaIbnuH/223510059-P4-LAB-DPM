import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styles from './styles/styles';

const SkorTim = ({ teamName, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={onIncrement} style={styles.button}>+</Button>
        <Button mode="outlined" onPress={onDecrement} style={styles.button}>-</Button>
      </View>
    </View>
  );
};

export default SkorTim;