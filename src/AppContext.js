import React, { createContext, useState } from 'react';

export const StateContext = createContext();

const AppContext = ({ children }) => {
  const [launches, setLaunches] = useState([]);

  const state = {
    launches,
    setLaunches,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default AppContext;
