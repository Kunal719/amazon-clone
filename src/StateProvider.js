import React, { createContext, useReducer, useContext } from 'react';

// Data layer used by all components to transfer data
export const StateContext = createContext();

// Wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Extract info from data layer
export const useStateValue = () => useContext(StateContext);
