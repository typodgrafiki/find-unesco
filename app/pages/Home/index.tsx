"use client"

import Navbar from "@/app/components/Navbar"
import Baner from "./components/Baner"
import ProductList from "@/app/components/ProductList/ProductList"

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Baner />
            <div className="container">
                <ProductList />
            </div>
        </>
    )
}

export default Homepage