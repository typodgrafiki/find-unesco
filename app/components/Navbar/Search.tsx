"use client"
import Image from "next/image"
import Button from "../Button"
import img from "../../assets/images/search.svg"

const Search = () => {
    return (
        <>
            <form className="searchForm flex">
                <input
                    placeholder="Where You go?"
                    tyle="text"
                    className="formControl"
                />
                <Button
                    icon
                    dark
                    className="btn"
                >
                    <Image
                        src={img.src}
                        width={18}
                        height={18}
                        alt="search"
                    />
                </Button>
            </form>
        </>
    )
}

export default Search
