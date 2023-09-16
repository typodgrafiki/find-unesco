'use client'
 
import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode,
} from "react"

interface FormData {
    locations: string[]
    types: string[]
}

export interface FormResults {
    name_en: string
    short_description_en: string
    longitude: number
    latitude: number
    category: string
    states_name_en: string[]
    region_en: string
    iso_code: string
    udnp_code: string
    image?: string
    link?: string
}

interface ThemeContextType {
    openSearch: boolean
    setOpenSearch: Dispatch<SetStateAction<boolean>>
    formData: FormData
    setFormData: Dispatch<SetStateAction<FormData>>
    formResults: FormResults[]
    setFormResults: Dispatch<SetStateAction<FormResults[]>>
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    selectItemIndex: number | null
    setSelectItemIndex: Dispatch<SetStateAction<number | null>>
    searchQuery: any[]
    setSearchQuery: Dispatch<SetStateAction<any[]>>
}

const ThemeContext = createContext<ThemeContextType>({
    openSearch: false,
    setOpenSearch: () => {},
    formData: {
        locations: [],
        types: [],
    },
    setFormData: () => {},
    formResults: [],
    setFormResults: () => {},
    showModal: false,
    setShowModal: () => {},
    selectItemIndex: null,
    setSelectItemIndex: () => {},
    searchQuery: [],
    setSearchQuery: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState<any[]>([])
    const [openSearch, setOpenSearch] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        locations: [],
        types: [],
    })
    const [formResults, setFormResults] = useState<FormResults[]>([])
    const [selectItemIndex, setSelectItemIndex] = useState<number | null>(null)

    return (
        <ThemeContext.Provider
            value={{
                openSearch,
                setOpenSearch,
                formData,
                setFormData,
                showModal,
                setShowModal,
                searchQuery,
                setSearchQuery,
                formResults,
                setFormResults,
                selectItemIndex,
                setSelectItemIndex,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext = () => useContext(ThemeContext)