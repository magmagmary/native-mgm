import { Text, StyleSheet, type StyleProp, type ViewStyle, Pressable } from 'react-native';

export function Button({ title, onPress, styles }: { title: string; onPress?: () => void; styles?: StyleProp<ViewStyle> }) {
  return (
    <Pressable style={[buttonStyles.button, styles]} onPress={onPress}>
      <Text style={buttonStyles.text}>{title}</Text>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
