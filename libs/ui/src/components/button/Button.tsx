import {
  Text,
  type StyleProp,
  type ViewStyle,
  Pressable,
  type PressableProps,
  StyleSheet,
} from 'react-native';
import { primary_color } from '../../tokens/colors';

type Props = PressableProps & {
  title: string;
  styles?: StyleProp<ViewStyle>;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const backgroundColor = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

export function Button({
  title,
  className,
  styles,
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => (pressed ? [Styles.pressedBtn, styles] : styles)}
      android_ripple={{ color: primary_color }}
      className={`${backgroundColor[variant]} p-2 rounded-md items-center hover:bg-opacity-35 transition-all disabled:bg-secondary disabled:pointer-events-none ${className}`}
    >
      <Text className="text-white font-bold">{title}</Text>
    </Pressable>
  );
}

const Styles = StyleSheet.create({
  pressedBtn: {
    opacity: 0.5,
    backgroundColor: 'blue',
  },
});
