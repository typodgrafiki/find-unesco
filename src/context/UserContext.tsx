// 'use client'
// import {
//     createContext,
//     useContext,
//     useState,
//     Dispatch,
//     SetStateAction,
//     ReactNode,
// } from "react"

// const UserContext = createContext()

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
// const [openSearch, setOpenSearch] = useState(false)
// const [showModal, setShowModal] = useState(false)
// const [formData, setFormData] = useState<FormData>({
// 	locations: [],
// 	types: []
// })

//     return (
//         <UserContext.Provider value={{ user, loading }}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export const useUser = () => useContext(UserContext)
