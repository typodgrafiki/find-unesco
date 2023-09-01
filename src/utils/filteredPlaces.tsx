import listPlaces from "@/lib/listPlacesUnesco.json"



export const toArray = (element) => {
    return element?.split(',') || []
}


export const listPlacesEurope = listPlaces.filter(item => {
    return item.region_en.includes("Europe");
})

const getListCountriesEurope = (listPlacesEurope) => {
    const listCountriesEurope = listPlacesEurope.map(item => {
        return {
            "states_name_en": item.states_name_en,
            "iso_code": item.iso_code
        }
    })
  
    const uniqueDataObject = listCountriesEurope.reduce((acc, item) => {
        if (item.states_name_en.length === 1) {
            if (!acc[item.states_name_en]) {
                acc[item.states_name_en] = item;
            }
        }
        return acc;
    }, {});
  
    return Object.values(uniqueDataObject);
}

export const listCountriesEurope = getListCountriesEurope(listPlacesEurope);




// ---


export const countriesEurope = () => {
    
    const result = []
    
    listPlaces.forEach(item => {
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



export const isoList = listPlaces.reduce((acc, item) => {

    const { states_name_en, iso_code, region_en } = item;
  
  // Sprawdzamy, czy obiekt ma właściwość "region_en": "Asia and the Pacific"
  if (region_en === "Europe and North America") {
    // Sprawdzamy, czy iso_code zawiera przecinki, jeśli tak, dzielimy go na tablicę
    const isoCodeArray = iso_code.includes(",") ? iso_code.split(",").map(code => code.trim()) : [iso_code];

    // Ustawiamy "states_name_en" jako klucz i "isoCodeArray" jako wartość
    acc[states_name_en[0]] = isoCodeArray;
  }
  
  return acc;
}, {});
  



export const listItems = (country, types) => {
    
    
    
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