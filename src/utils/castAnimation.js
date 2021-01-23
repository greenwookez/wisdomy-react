import { Animated, Easing } from 'react-native';

export const opacity = new Animated.Value(1);

export const castAnimation = (toValue) => {
  Animated.timing(opacity, {
    toValue: toValue,
    duration: 200,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
};
