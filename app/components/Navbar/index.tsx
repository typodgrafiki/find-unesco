"use client"
import { dropdownData } from "@/app/utils/dropdownData"
import Button from "../Button"
import Dropdown from "./Dropdown"
import Logo from "./Logo"
import Search from "./Search"
import "../../styles/navbar.scss"

const Navbar = () => {
    const handlerAddPlace = () => {
        return null
    }

    return (
        <div className="navbar">
            <Logo />
            <Search />
            <div className="buttons">
                <Button
                    className="btn btn-add-place"
                    onClick={handlerAddPlace}
                >
                    Add place
                </Button>
                {dropdownData.map((item) => (
                    <Dropdown
                        label={item.label}
                        options={item.options}
                        lang={item.lang}
                        key={item.label}
                    />
                ))}
            </div>
        </div>
    )
}

export default Navbar
