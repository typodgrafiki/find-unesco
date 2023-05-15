"use client"
import Image from "next/image"
import Input from "../Input"
import Button from "../Button"
import img from "../../assets/images/search.svg"

const Search = () => {
    return (
        <>
            <form className="searchForm">
                <Input placeholder="Where You go?" />
                <Button search>
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
