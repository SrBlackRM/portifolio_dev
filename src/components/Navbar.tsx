import { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import { logotext } from "../assets"
import { styles } from "../styles";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar(): ReactElement{
    const { scrollY } = useScroll()
    const [ currentScrollY, setCurrentScrollY ] = useState<number>(0);
    const [ shrinkNav, setShrinkNav ] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const difference = latest - currentScrollY;

        if(difference > 0) {
            setShrinkNav(true);
        }else if(difference < 0) {
            setShrinkNav(false);
        }else{
            setShrinkNav(false);
        }
        
        console.log(currentScrollY, latest, difference, shrinkNav)
        setCurrentScrollY(latest);
    })

    return(
        <motion.nav 
            className="w-screen text-white flex flex-row py-10 px-40 fixed top-0 justify-between z-10" 
            style={{
                backgroundColor: "black",
            }}
            initial={{y: 0, paddingBottom: 40}}
            animate={{y:shrinkNav ? -30:0 , paddingBottom: shrinkNav ? 0:40}}
            transition={{type:"tween"}}
        >
            <div >
                <img src={logotext} className="w-48" />
            </div>
            <motion.div className={styles.flexCenter}
                initial={{opacity: 1}}
                animate={{opacity: shrinkNav? 0: 1, x: [-20, 20]}}
                transition={{duration: 1}}
            >
                <ul className="flex gap-8 text-2xl font-navFont uppercase"                >
                    <NavLink to={'/home'} className="hover:text-myColorGreen">Home</NavLink>
                    <NavLink to={'/projects'} className="hover:text-myColorGreen">Projects</NavLink>
                    <NavLink to={'/digital-arts'} className="hover:text-myColorGreen">Digital Arts</NavLink>
                </ul>
            </motion.div>
        </motion.nav>
    )
}