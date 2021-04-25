import React, { createContext, useContext, useReducer } from "react";

//Preparing the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull info from Data Layer
export const useStateValue = () => useContext(StateContext);
