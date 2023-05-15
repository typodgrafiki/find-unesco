import Button from "../Button"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <div className="buttons-top">
                <Button>Share your space</Button>
                <Button>Language</Button>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Navbar
