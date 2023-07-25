'use client'
 
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'
 
interface FormData {
	locations: string[];
	types: string[];
}

interface ThemeContextType {
	openSearch: boolean
	setOpenSearch: Dispatch<SetStateAction<boolean>>
	formData: FormData
	setFormData: Dispatch<SetStateAction<FormData>>,
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType>({
	openSearch: false,
	setOpenSearch: () => {},
	formData: {
        locations: [],
        types: [],
    },
	setFormData: () => {},
	showModal: false,
	setShowModal: () => {}
})
 
export const ThemeProvider = ({children}) => {
	
	const [openSearch, setOpenSearch] = useState(false) 
	const [showModal, setShowModal] = useState(false) 
	const [formData, setFormData] = useState<FormData>({
		locations: [],
		types: []
	})
	
  	return  (
		<ThemeContext.Provider value={{ openSearch, setOpenSearch, formData, setFormData, showModal, setShowModal }}>
			{children}
		</ThemeContext.Provider>	
	)
}

export const useGlobalContext = () => useContext(ThemeContext)