import { createContext } from "react";
import { themeMode } from "./components/Theme/themeMode";

export const ThemeContext = createContext(themeMode.theme.blue);
export const ModeContext = createContext(themeMode.mode.light);