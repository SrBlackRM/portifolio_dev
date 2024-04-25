import { useEffect, useState } from "react";
import { styles } from "../styles";
import { TextTypingEffect } from "./effects";
import { motion } from "framer-motion";
import { Avatar, Button } from "@mui/material";
import { avatarprofile } from "../assets";

const About = () => {
    const [bannerStringEffect, setBannerStringEffect] = useState<string>("");
    const [displayPosTextPresentation, setDisplayPosTextPresentation] = useState<boolean>(false);

    useEffect(()=>{
        TextTypingEffect(["Hello World!","My name is Michel","And I'm a","Frontend Developer"], 0.1, setBannerStringEffect)
        .then(()=>{setDisplayPosTextPresentation(true)});
    },[window]);

    const MotionButton = motion(Button);
    const MotionAvatar = motion(Avatar);

    return(
        <section className={`h-[100vh] ${styles.flexCenter}`}>
            <h1 className="font-bannerFont text-9xl text-myColorGreen pt-20">{bannerStringEffect}</h1>
            <div className="absolute">
                <MotionAvatar alt="Michel R Mota" src={avatarprofile}
                    initial={{opacity:0, y:-300, scale: 1}}
                    animate={{opacity:displayPosTextPresentation ? 1:0, y: -200 , scale: 6}}
                    transition={{type: "tween"}}
                ></MotionAvatar>
            </div>
            <div className="absolute">
                <MotionButton 
                    initial={{y:400, opacity: 0}}
                    animate={{y: 200, opacity: displayPosTextPresentation ? 1 : 0}}
                    transition={{type: "spring"}}
                    variant="outlined"
                    size="large"
                >CONTACT</MotionButton>
            </div>
            
        </section>
    )    
}

export default About;