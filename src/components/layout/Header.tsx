import { NavLink } from "react-router-dom"

export const Header = () => {

    return <header className={["site-header"].join(" ")}>
        <div className="wrapper">
            <h4>
                Portfolio
            </h4>
            <NavLink to={"/"} >Home</NavLink>
            <NavLink to={"/About"} >About</NavLink>
        </div>
    </header>
}