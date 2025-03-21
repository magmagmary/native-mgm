import React from "react";
import { TextInput, type TextInputProps } from "react-native";

export const Input = (props: TextInputProps) => {
	return (
		<TextInput
    autoCapitalize="none"
    autoCorrect={false}
    {...props}
    className={"bg-slate-200 h-12 rounded-md px-4 w-full lg:max-w-72 focus:outline-none " + props.className}
		/>
	);
};
