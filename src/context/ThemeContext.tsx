"use client"
import { useContext } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({children})=> {
	return(
		<ThemeContext.Provider value={"mycontext2"}>
			{children}
		</ThemeContext.Provider>
	)
}