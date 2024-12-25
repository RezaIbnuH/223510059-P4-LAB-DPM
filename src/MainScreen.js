import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, Text, Divider } from 'react-native-paper';
import SkorTim from './SkorTim';
import styles from './styles/styles';

const MainScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Tim A Menang!', 'Selamat untuk Tim A!');
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Tim B Menang!', 'Selamat untuk Tim B!');
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal</Text>
      <Divider style={styles.divider} />
      <SkorTim
        teamName="Tim A"
        score={scoreA}
        onIncrement={() => incrementScore('A')}
        onDecrement={() => decrementScore('A')}
        containerStyle={styles.teamAContainer}
      />
      <SkorTim
        teamName="Tim B"
        score={scoreB}
        onIncrement={() => incrementScore('B')}
        onDecrement={() => decrementScore('B')}
        containerStyle={styles.teamBContainer}
      />
      <Divider style={styles.divider} />
      <Button mode="contained" onPress={resetScores} style={styles.resetButton}>Reset Pertandingan</Button>
    </View>
  );
};

export default MainScreen;