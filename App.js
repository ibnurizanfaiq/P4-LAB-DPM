import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleIncreaseScoreA = () => {
    if (winner) return; // Jika sudah ada pemenang, tidak bisa tambah skor
    setTeamAScore(prevScore => prevScore + 1);
  };

  const handleDecreaseScoreA = () => {
    if (winner) return; // Jika sudah ada pemenang, tidak bisa kurangi skor
    setTeamAScore(prevScore => (prevScore > 0 ? prevScore - 1 : 0));
  };

  const handleIncreaseScoreB = () => {
    if (winner) return; // Jika sudah ada pemenang, tidak bisa tambah skor
    setTeamBScore(prevScore => prevScore + 1);
  };

  const handleDecreaseScoreB = () => {
    if (winner) return; // Jika sudah ada pemenang, tidak bisa kurangi skor
    setTeamBScore(prevScore => (prevScore > 0 ? prevScore - 1 : 0));
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
  };

  const checkWinner = () => {
    if (teamAScore === 10) {
      setWinner('Team A');
    } else if (teamBScore === 10) {
      setWinner('Team B');
    }
  };

  // Cek pemenang setiap kali skor berubah
  React.useEffect(() => {
    checkWinner();
  }, [teamAScore, teamBScore]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Match Score</Text>
      <View style={styles.matchContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team A</Text>
          <Text style={styles.score}>{teamAScore}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={handleIncreaseScoreA} />
            <Button title="-" onPress={handleDecreaseScoreA} />
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team B</Text>
          <Text style={styles.score}>{teamBScore}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={handleIncreaseScoreB} />
            <Button title="-" onPress={handleDecreaseScoreB} />
          </View>
        </View>
      </View>

      {winner && <Text style={styles.winner}>Winner: {winner}</Text>}
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 40,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  winner: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'darkblue',
  },
});

export default App;
