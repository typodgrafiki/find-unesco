"use client"
import Button from "../Button"
import Language from "./Language"
import Dropdown from "./Dropdown"
import Logo from "./Logo"
import Search from "./Search"
import "../../styles/navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <div className="buttons">
                <Button className="btn">Share your home</Button>
                <Dropdown 
                    label="Lang"
                    dropdownEl={["English", "German", "Polish"]}
                    lang
                />
                <Dropdown 
                    label="Login"
                    dropdownEl={["Login", "Sign in", "Logout"]}
                />
            </div>
        </div>
    )
}

export default Navbar
