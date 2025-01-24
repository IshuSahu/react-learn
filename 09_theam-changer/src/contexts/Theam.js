import React, { createContext, useContext } from "react";

export const TheamContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const TheamContextProvider = TheamContext.Provider;

//also u can create custome hooks
export default function useTheme() {
  return useContext(TheamContext);
}
