import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';
import { SWIPEABLE_CONFIG } from './constants';

const SwipeableList = ({
  list,
  renderItem,
}) => {
  const [pointer, setPointer] = useState(0)
  const Component = renderItem(list[pointer]);

  const onSwipeLeft = () => {
    setPointer((prevPointer) => prevPointer + 1)
  };

  const onSwipeRight = () => {
    setPointer((prevPointer) => prevPointer + 1)
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={SWIPEABLE_CONFIG}
      style={styles.swipeable}
    >
      {Component}
    </GestureRecognizer>
  )
};

export default SwipeableList;