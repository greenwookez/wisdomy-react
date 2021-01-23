import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Animated } from 'react-native';

import styles from './styles';
import { SWIPEABLE_CONFIG } from './constants';
import { opacity, castAnimation } from '../utils/castAnimation.js';

const SwipeableList = ({
  list,
  renderItem,
}) => {
  const [pointer, setPointer] = useState(0)
  const Component = renderItem(list[pointer]);

  const onSwipe = (nextPointer) => {
    if (nextPointer < 0) {
      nextPointer = list.length - 1;
    } else if (nextPointer > list.length - 1) {
      nextPointer = 0;
    }

    castAnimation(0);

    setTimeout(() => { 
      setPointer(nextPointer)
      castAnimation(1)
    }, 100);
  };

  return (
    <GestureRecognizer
      onSwipeRight={() => { onSwipe(pointer - 1) }}
      onSwipeLeft={() => { onSwipe(pointer + 1) }}
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
