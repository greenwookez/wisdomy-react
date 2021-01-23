import React from 'react';
import { ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import FavoCard from './components/FavoCard';
import styles from './styles';

const FavouritesScreen = () => {
  const author = {
    name: "Винсент Ван Гог"
  }
  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        >
        <FavoCard
          text="Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся."
          author={author}
          first
        />
        <FavoCard
          text="Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся."
          author={author}
        />
        <FavoCard
          text="Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся."
          author={author}
        />
        <FavoCard
          text="Лучше говорить меньше, но выбирать такие слова, в которых много смысла, чем произносить длинные, но пустые речи, которые столь же бесполезны, сколь легко произносятся."
          author={author}
        />
      </ScrollView>
    </ScreenWrapper>
  )
};

export default FavouritesScreen;
