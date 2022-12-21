import React, {createContext, useContext, useReducer} from "react";

// prepares the dataLayer
export const StateContext = createContext();
// Wrap the app and provides dataLayer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value ={useReducer(reducer, initialState)}> 
        {children}
    </StateContext.Provider>
);
// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);