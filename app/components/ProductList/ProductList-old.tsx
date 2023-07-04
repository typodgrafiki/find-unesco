"use client"
import data from "@/app/utils/listPlacesUnesco.json"
// import { notFound } from "next/navigation"
import ProductBox from "./ProductBox"
import "@/app/styles/productList.scss"

// Elementy pobierane default "use server"
// Aby robic to "use client" najlepiej skorzystac z SWR w Next

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }, // dane sa domyslnie cachowane. To oznacza ze cach bedzie odswiezany po 10 sek
    })

    if (!res.ok) {
        throw new Error("failed to fetch data")
        // return notFound()
    }

    // return res.json()
}

const ProductList = async () => {
    // const data = await getData()

    const filteredElements = data.filter(
        (element) => element.region_en === "Europe and North America"
    )
    const randomElements = filteredElements
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
    

    return (
        <>
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

                    // <ProductBox
                    //     key={element.id}
                    //     name={element.title}
                    //     short_description={element.body}
                    // />
                ))}
            </div>
        </>
    )
}

export default ProductList
