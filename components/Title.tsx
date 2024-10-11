import { Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
};

function Title ({ children }: TitleProps) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create ({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    }
})