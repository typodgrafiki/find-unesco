import { FC } from "react"
import Image from "next/image"
import ProductBox from "./ProductBox"

import "@/styles/productList.scss"
import { listItems, toArray } from "@/utils/filteredPlaces"

interface ProductListProps {
    country: string
    iso?: string
    types?: string
}

const ProductList: FC<ProductListProps> = ({ country, iso, types }) => {
    // const countryLowerCase: string = country?.toLowerCase() || ''

    const countryArray: string[] = toArray(country || "")
    const countryTitle: string = countryArray.join(", ")
    const typesArray: string[] = toArray(types || "")
    const typesTitle: string = typesArray.join(", ")

    const countryElementsFn = () => {
        const filteredElements = listItems(country || "", types || "")

        if (iso) {
            const randomElements = filteredElements
                .sort(() => 0.5 - Math.random())
                .slice(0, 4)
            return randomElements
        }

        return filteredElements
    }

    const elements = countryElementsFn()
    const numberElements = elements.length

    return (
        <div>
            <div className="titleRow flex flexJustifyBetween flexAlignCenter">
                {iso ? (
                    <>
                        <h2 className="title">
                            <Image
                                src={`flags/${iso}.svg`}
                                alt={country}
                                width={21}
                                height={21}
                            />
                            <a href={`/search?locations=${country}`}>
                                {countryTitle}
                            </a>
                        </h2>
                        <a
                            href={`/search?locations=${country}`}
                            className="btn btnDefault"
                        >
                            Show more
                        </a>
                    </>
                ) : (
                    <h2 className="title">
                        {countryTitle}
                        <small className="block">{typesTitle}</small>
                    </h2>
                )}
            </div>
            {!iso && <div>Number of results: {numberElements}</div>}
            {elements.length ? (
                <div className={iso ? "productList" : "searchList"}>
                    {elements.map((element, index) => (
                        <ProductBox
                            key={element.link + "_" + index}
                            name={element.name_en}
                            category={element.category}
                            image={element.image}
                            states_name={element.states_name_en}
                            short_description={element.short_description_en}
                            region={element.region_en}
                            index={index}
                            homepage={iso ? true : false}
                            link={element.link}
                        />
                    ))}
                </div>
            ) : (
                <div>No results found for your query.</div>
            )}
        </div>
    )
}

export default ProductList
