"use client"
import Button from "../Button"
import Dropdown from "./Dropdown"
import Logo from "./Logo"
import Search from "./Search"
import "../../styles/navbar.scss"

const dropdownData = [
    {
        label: "Language",
        options: [
            {
                label: "English",
                url: "wefwe",
            },
            {
                label: "German",
                url: "gr",
            },
            {
                label: "Polish",
                url: "gr",
            },
        ],
        lang: true,
    },
    {
        label: "Login",
        options: [
            {
                label: "Login",
                url: "dsdgdf",
            },
            {
                label: "Sign in",
                url: "dsdgdf",
            },
            {
                label: "Logout",
                url: "dsdgdf",
            },
        ],
    },
]

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <div className="buttons">
                <Button className="btn">Share your home</Button>

                {dropdownData.map((item, index) => (
                    <Dropdown
                        data={item}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Navbar
