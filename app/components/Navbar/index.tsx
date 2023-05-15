"use client"
import Button from "../Button"
import Language from "./Language"
import Logo from "./Logo"
import Search from "./Search"
import css from "../../styles/navbar.module.scss"

const Navbar = () => {
    return (
        <div className={css.navbar}>
            <Logo />
            <Search />
            <div className={css.navbarButtons}>
                <Button>Share your home</Button>
                <Language />
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Navbar
