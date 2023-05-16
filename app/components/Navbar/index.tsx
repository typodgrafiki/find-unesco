"use client"
import Button from "../Button"
import Language from "./Language"
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
                <Language />
                <Button className="btn">Login</Button>
            </div>
        </div>
    )
}

export default Navbar
