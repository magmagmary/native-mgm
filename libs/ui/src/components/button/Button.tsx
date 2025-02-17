import { Text, TouchableOpacity, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

export function Button({ title, onPress, styles }: { title: string; onPress: () => void; styles: StyleProp<ViewStyle> }) {
  return (
    <TouchableOpacity style={[buttonStyles.button, styles]} onPress={onPress}>
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
