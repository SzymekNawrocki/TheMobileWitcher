import { Text, View, StyleSheet } from "react-native";
import { ReactNode } from "react";

type NumberContainerProps = {
    children: ReactNode;
}

function NumberContainer({children}: NumberContainerProps) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#ffffff',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#000000',
        fontSize: 36,
        fontWeight: 'bold'
    }
})

