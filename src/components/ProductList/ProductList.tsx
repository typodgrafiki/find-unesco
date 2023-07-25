import data from "@/lib/listPlacesUnesco.json"
import Image from "next/image"
import ProductBox from "./ProductBox"
import flag from "public/flags/pl.svg"
import "@/styles/productList.scss"

interface ProductListProps {
    country: string;
}

const ProductList: FC.React<ProductListProps> = ({ country }) => {
    
    const countryLowerCase: string = country.toLowerCase()

    // const filteredElements = data.filter(
    //     (element) => element.states_name_en === country
    // )
    
    const filteredElements = data.filter((element) =>
        element.states_name_en.includes(country)
    )
    
    const randomElements = filteredElements
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        
    return (
        <>
            <div className="titleRow flex flexJustifyBetween flexAlignCenter">
                <h2 className="title">
                    <Image 
                        src={flag}
                        alt={country}
                        width={21}
                        height={21}
                    />
                    {country}
                </h2>
                <a href={`/search?country=${countryLowerCase}`} className="btn btnDefault">
                    Show more
                </a>
            </div>
            <div className="productList">
                {randomElements.map((element) => (
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
        </>
    )
}

export default ProductList