import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';
import { SWIPEABLE_CONFIG } from './constants';

const SwipeableList = ({
  children,
  // list,
  // renderItem,
}) => {
  return (
    <GestureRecognizer
      onSwipeLeft={() => {}}
      onSwipeRight={() => {}}
      config={SWIPEABLE_CONFIG}
      style={styles.swipeable}
    >
      {children}
    </GestureRecognizer>
  )
};

export default SwipeableList;