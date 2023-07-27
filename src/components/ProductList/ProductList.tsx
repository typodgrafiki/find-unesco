import data from "@/lib/listPlacesUnesco.json"
import Image from "next/image"
import ProductBox from "./ProductBox"
import "@/styles/productList.scss"

interface ProductListProps {
    country: string
    iso?: string 
}

const ProductList: FC.React<ProductListProps> = ({ country, iso }) => {
    
    const countryLowerCase: string = country.toLowerCase()
    const countryArray: string[] = country.split(',')

    // const filteredElements = data.filter(
    //     (element) => element.states_name_en === country
    // )
    
    // const filteredElements = data.filter((element) =>
    //     element.states_name_en.includes(country)
    // )

    const countryElementsFn = () => {
        
        const filteredElements = data.filter((element) => 
            countryArray.some((country) => element.states_name_en.includes(country))   
        )
        
        if (iso) {
            const randomElements = filteredElements.sort(() => 0.5 - Math.random()).slice(0, 8)
            return randomElements
        }
        
        return filteredElements
    }
    
    const elements = countryElementsFn() 
    
        
        
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
                    {country}
                </h2>
                {iso && (
                    <a href={`/search?country=${countryLowerCase}`} className="btn btnDefault">
                        Show more
                    </a>    
                )}
            </div>
            <div className={iso ? 'productList' : 'searchList'}>
                {elements.map((element) => (
                    <ProductBox
                        key={element.link}
                        name={element.name_en}
                        category={element.category}
                        image={element.image}
                        states_name={element.states_name_en}
                        short_description={element.short_description_en}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList