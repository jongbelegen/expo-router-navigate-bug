import React from 'react';
import {Pressable, Text} from "react-native";

type Props = {
    children: React.ReactNode;
    onPress: () => void;
}

export const Button = ({children, onPress}: Props) => {
    return (
        <Pressable style={{
            padding: 16,
            margin: 16,
            borderRadius: 8,
            backgroundColor: "black",
        }} onPress={onPress}>
            <Text style={{color: "white"}}>{children}</Text>
        </Pressable>
    );
};