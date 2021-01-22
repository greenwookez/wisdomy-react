import React from 'react';
import { Text } from 'react-native';

const GlobalContext = React.createContext();

const GlobalContextProvider = ({
  children
}) => {
  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;
