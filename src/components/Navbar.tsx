import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { logotext } from "../assets"
import { styles } from "../styles";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar(): ReactElement{
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
      console.log("Page scroll: ", latest)
    })

    return(
        <nav className="w-screen text-white flex flex-row py-10 px-40 fixed top-0 justify-between z-1" style={{backgroundColor: "black"}}>
            <div >
                <img src={logotext} className="w-48" />
            </div>
            <motion.div className={styles.flexCenter}
                animate={{opacity: [0, 1], x: [-20, 20]}}
                transition={{duration: 1}}
            >
                <ul className="flex gap-8 text-2xl font-navFont uppercase"                >
                    <NavLink to={'/home'} className="hover:text-myColorGreen">Home</NavLink>
                    <NavLink to={'/projects'} className="hover:text-myColorGreen">Projects</NavLink>
                    <NavLink to={'/digital-arts'} className="hover:text-myColorGreen">Digital Arts</NavLink>
                </ul>
            </motion.div>
        </nav>
    )
}