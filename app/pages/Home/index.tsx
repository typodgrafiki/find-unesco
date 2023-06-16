"use client"

import Navbar from "@/app/components/Navbar"
import Baner from "./components/Baner"
import ProductList from "@/app/components/ProductList/ProductList"
import Footer from "@/app/components/Footer"

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Baner />
            <div className="container">
                <ProductList />
            </div>
            <Footer />
        </>
    )
}

export default Homepage