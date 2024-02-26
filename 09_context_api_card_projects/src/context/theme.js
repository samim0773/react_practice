import { createContext, useContext } from "react";

export const TehemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = TehemeContext.Provider;

export default function useTheme() {
  return useContext(TehemeContext);
}
