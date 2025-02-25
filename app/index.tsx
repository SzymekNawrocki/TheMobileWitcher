import { StyleSheet, ImageBackground , SafeAreaView } from "react-native";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import GameScreen from "@/screens/GameScreen";

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | undefined>(undefined);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber !== undefined) {
    screen = <GameScreen userNumber={userNumber} />; 
  }
    
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('@/assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  },
});