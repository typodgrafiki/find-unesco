import listPlaces from "@/lib/listPlacesUnesco.json"
import { FormResults } from "@/context/ThemeContext"

export const toArray = (element: string): string[] => {
    return element?.split(",") || []
}

export const listPlacesEurope = listPlaces.filter((item) => {
    return item.region_en.includes("Europe")
})

const getListCountriesEurope = (listPlacesEurope: FormResults[]) => {
    const listCountriesEurope = listPlacesEurope.map((item) => {
        return {
            states_name_en: item.states_name_en,
            iso_code: item.iso_code,
        }
    })

    const uniqueDataObject = listCountriesEurope.reduce<{ [key: string]: any }>(
        (acc, item) => {
            if (item.states_name_en.length === 1) {
                if (!acc[item.states_name_en[0]]) {
                    acc[item.states_name_en[0]] = item
                }
            }
            return acc
        },
        {}
    )

    return Object.values(uniqueDataObject)
}

export const listCountriesEurope = getListCountriesEurope(listPlacesEurope)

// ---

export const countriesEurope = () => {
    const result: string[] = []

    listPlaces.forEach((item) => {
        // Sprawdzamy, czy wartość "states_name_en" nie istnieje jeszcze w tablicy uniqueStates,
        // oraz czy "region_en" jest ustawione na "Europe and North America"
        if (
            !result.includes(item.states_name_en[0]) &&
            item.region_en === "Europe and North America"
        ) {
            // Jeśli wartości nie ma i spełnia warunek regionu, dodajemy ją do tablicy uniqueStates
            result.push(item.states_name_en[0])
        }
    })

    return result
}

export const isoList = listPlaces.reduce<{ [key: string]: string[] }>((acc, item) => {
    const { states_name_en, iso_code, region_en } = item

    if (region_en === "Europe and North America") {
        const isoCodeArray = iso_code.includes(",")
            ? iso_code.split(",").map((code) => code.trim())
            : [iso_code]
        acc[states_name_en[0]] = isoCodeArray
    }

    return acc
}, {})

export const listItems = (country: string, types: string) => {
    const countryArray: string[] = toArray(country)
    const typesArray: string[] = toArray(types)

    const result = listPlaces.filter((element) => {
        const isInCountryArray = countryArray.some((country) =>
            element.states_name_en.includes(country)
        )

        const isInTypesArray = typesArray.some((type) =>
            element.category.includes(type)
        )

        if (typesArray.length > 0) {
            return isInCountryArray && isInTypesArray
        } else {
            return isInCountryArray
        }
    })

    return result
}

  

export const listTypes = [...new Set(listPlaces.map(item => item.category))];