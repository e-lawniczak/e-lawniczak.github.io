import { NavLink } from "react-router-dom"
import '../../styles/_sideBar.scss'
import { ProjectPages } from "../common/ProjectPages"
export const SideBar = () => {

    const menuElements = ProjectPages.map((p, idx) => p.path != '/*' && <NavLink key={idx.toString() + p.label} to={p.path} className={'opt'} >{p.label}</NavLink>).filter(p => p)

    return <nav className={["side-bar"].join(" ")}>

        <div className="profile">
            <div className="img-container profile-pic">
                <img src="/img/profile_picture_res.jpg" alt="Profile Picture; Eryk Ławniczak" />
            </div>
            <NavLink to={"/"}>
                <h1>
                    Eryk Ławniczak
                </h1>
                <h4>Software Developer</h4>
                <h4>Poznań, Poland</h4>
            </NavLink>
            <a href="mailto:eryk.lawniczak@gmail.com">eryk.lawniczak@gmail.com</a>
        </div>
        <div className="navigation">
            {menuElements}
        </div>
        <div className="copy">
            &copy; Eryk Ławniczak 2025, All rights reserved.
        </div>

    </nav>
}