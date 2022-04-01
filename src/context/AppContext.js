import React, { createContext, useReducer } from "react";

const appReducer = (state, action) => {
  switch (action.type) {
    case "SAVEFORM":
      return {
        dataform: action.payload.dataform,
        show: action.payload.show,
      };
    default:
      return { ...state };
  }
};

const INITIAL_STATE = {
  dataform: {},
  show: true,
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{ dataform: state.dataform, show: state.show, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};
