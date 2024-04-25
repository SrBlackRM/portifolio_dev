import { useEffect, useState } from "react";
import { styles } from "../styles";
import { TextTypingEffect } from "./effects";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const About = () => {
    const [bannerStringEffect, setBannerStringEffect] = useState<string>("");
    const [displayButton, setDisplayButton] = useState<boolean>(false);

    useEffect(()=>{
        TextTypingEffect(["Hello World!","My name is Michel","And I'm a","Frontend Developer"], 0.1, setBannerStringEffect)
        .then(()=>setDisplayButton(true));
    },[window]);

    const MotionButton = motion(Button);

    return(
        <section className={`h-[100vh] ${styles.flexCenter}`}>
            <h1 className="font-bannerFont text-9xl text-myColorGreen">{bannerStringEffect}</h1>
            <div className="absolute">
                <MotionButton 
                    initial={{y:400, opacity: 0}}
                    animate={{y: displayButton ? 200 : 400, opacity: displayButton ? 1 : 0}}
                    transition={{type: "spring"}}
                    variant="outlined"
                    size="large"
                >CONTACT</MotionButton>
            </div>
            
        </section>
    )    
}

export default About;