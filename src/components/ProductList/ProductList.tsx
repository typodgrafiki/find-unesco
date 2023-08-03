import data from "@/lib/listPlacesUnesco.json"
import Image from "next/image"
import ProductBox from "./ProductBox"
import "@/styles/productList.scss"

interface ProductListProps {
    country: string
    iso?: string 
    types?: string
}

const ProductList: FC.React<ProductListProps> = ({ country, iso, types }) => {
    
    // const countryLowerCase: string = country?.toLowerCase() || ''
    
    const countryArray: string[] = country?.split(',') || []
    const countryTitle: string = countryArray.join(', ')
    const typesArray: string[] = types?.split(',') || []
    const typesTitle: string = typesArray.join(', ')

    const countryElementsFn = () => {
        
        const filteredElements = data.filter((element) => {
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
        
        if (iso) {
            const randomElements = filteredElements.sort(() => 0.5 - Math.random()).slice(0, 8)
            return randomElements
        }
        
        return filteredElements
    }
    
    const elements = countryElementsFn() 
    const numberElements = elements.length
        
    return (
        <div>
            <div className="titleRow flex flexJustifyBetween flexAlignCenter">
                <h2 className="title">
                    {iso && (
                        <Image 
                            src={`flags/${iso}.svg`}
                            alt={country}
                            width={21}
                            height={21}
                        />
                    )}
                    {countryTitle}
                    <small className="block">{typesTitle}</small>
                </h2>
                {iso && (
                    <a href={`/search?locations=${country}`} className="btn btnDefault">
                        Show more
                    </a>    
                )}
            </div>
            {!iso && (
                <div>
                    Liczba wyników: {numberElements}
                </div>    
            )}
            {elements.length ? (
                <div className={iso ? 'productList' : 'searchList'}>
                    {elements.map((element, index) => (
                        <ProductBox
                            key={element.link+'_'+index}
                            name={element.name_en}
                            category={element.category}
                            image={element.image}
                            states_name={element.states_name_en}
                            short_description={element.short_description_en}
                        />
                    ))}
                </div>
            ) : (
                <div>Brak wyników dla zapytania.</div>
            )}
            
        </div>
    )
}

export default ProductList