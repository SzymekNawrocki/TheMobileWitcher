import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "@/components/Title";
import React, { useState } from "react";

function generateRandomBetween (min: number, max: number, exclude: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

type GameScreenProps = {
    userNumber: number;
}

const GameScreen: React.FC<GameScreenProps> =  ({userNumber}) => {

    const initialGuess = generateRandomBetween(1, 100, userNumber );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <SafeAreaView style={styles.screen}>
            <Title>Opponent's Guess</Title>
        <View>
            <Text>Higher or lower?</Text>
         </View>
        </SafeAreaView>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
    
})