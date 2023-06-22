// import ProductBox from "./ProductBox"
import data from "@/app/utils/test.json"
import ProductBox from "./ProductBox"
import "@/app/styles/productList.scss"

const ProductList = () => {
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
                ))}
            </div>
        </>
    )
}

export default ProductList
