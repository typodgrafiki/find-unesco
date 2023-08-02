'use client'
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react'

const UserContext = createContext(null)
 
export const ThemeProvider = ({children}) => {
	
	// const [openSearch, setOpenSearch] = useState(false) 
	// const [showModal, setShowModal] = useState(false) 
	// const [formData, setFormData] = useState<FormData>({
	// 	locations: [],
	// 	types: []
	// })
	
  	return  (
		<UserContext.Provider value={{ user, loading }}>
			{children}
		</UserContext.Provider>	
	)
}

export const useUser = () => useContext(UserContext)