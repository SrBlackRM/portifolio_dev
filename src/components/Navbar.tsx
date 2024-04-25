import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { logotext } from "../assets"
import { styles } from "../styles";

export default function Navbar(): ReactElement{
    return(
        <nav className="w-full flex flex-row py-10 px-40 fixed top-0 justify-between">
            <div >
                <img src={logotext} className="w-48" />
            </div>
            <div className={styles.flexCenter}>
                <ul className="flex gap-8 text-2xl font-navFont uppercase">
                    <NavLink to={'/home'} className="hover:text-myColorGreen">Home</NavLink>
                    <NavLink to={'/projects'} className="hover:text-myColorGreen">Projects</NavLink>
                    <NavLink to={'/digital-arts'} className="hover:text-myColorGreen">Digital Arts</NavLink>
                </ul>
            </div>
        </nav>
    )
}