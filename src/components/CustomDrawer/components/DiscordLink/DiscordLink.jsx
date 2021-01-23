import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

import styles from './styles';

const DISCORD_LINK = 'https://discord.gg/NaFKc6sUjz';

const DiscordLink = () => {
  return (
    <TouchableOpacity onPress={() => { Linking.openURL(DISCORD_LINK) }} >
      <Text style={styles.link}>
        Discord
      </Text>
    </TouchableOpacity>
  )
}

export default DiscordLink;