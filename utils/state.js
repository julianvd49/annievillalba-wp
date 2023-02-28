import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isEN, setIsEN] = useState(false);

  return (
    <StateContext.Provider value={{ isEN, setIsEN }}>
      {children}
    </StateContext.Provider>
  );
};