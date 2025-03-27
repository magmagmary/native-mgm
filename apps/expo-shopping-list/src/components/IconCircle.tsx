import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { ThemedText } from './themed-text';

type Props = {
  emoji: string;
  backgroundColor?: string;
  size?: number;
  style?: ViewStyle;
};

const IconCircle = ({
  emoji,
  size = 48,
  style,
  backgroundColor = 'lightblue',
}: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <ThemedText style={{ fontSize: 12 }}>{emoji}</ThemedText>
    </View>
  );
};

export default IconCircle;
