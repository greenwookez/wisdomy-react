import React from 'react';

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
