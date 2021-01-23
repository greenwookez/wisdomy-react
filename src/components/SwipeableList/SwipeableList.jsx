import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Animated, Easing } from 'react-native';

import styles from './styles';
import { SWIPEABLE_CONFIG } from './constants';

const opacity = new Animated.Value(1);

const castAnimation = (toValue) => {
  Animated.timing(opacity, {
    toValue: toValue,
    duration: 200,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
};

const SwipeableList = ({
  list,
  renderItem,
}) => {
  const [pointer, setPointer] = useState(0)
  const Component = renderItem(list[pointer]);

  const onSwipe = (nextPointer) => {
    castAnimation(0);
    setTimeout(() => {  setPointer(nextPointer) }, 200);
    setTimeout(() => castAnimation(1), 200);
  };

  return (
    <GestureRecognizer
      onSwipeRight={() => {onSwipe(pointer-1)}}
      onSwipeLeft={() => {onSwipe(pointer+1)}}
      config={SWIPEABLE_CONFIG}
      style={styles.swipeable}
    >
      <Animated.View style={[styles.container, { opacity: opacity }]}>
        {Component}
      </Animated.View>
    </GestureRecognizer>
  )
};

export default SwipeableList;
