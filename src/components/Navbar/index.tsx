import { dropdownData } from "@/utils/dropdownData"
import Dropdown from "./Dropdown"
import Logo from "./Logo"
import Search from "./Search"
import AddPlace from "./AddPlace"
import "@/styles/navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <Logo />
            <Search />
            <div className="buttons">
                <AddPlace />
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
