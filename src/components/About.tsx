import { useEffect, useState } from "react";
import { styles } from "../styles";
import { TextTypingEffect } from "./effects";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { avatarprofile } from "../assets";

const About = () => {
    const [bannerStringEffect, setBannerStringEffect] = useState<string>("");
    const [displayPosTextPresentation, setDisplayPosTextPresentation] = useState<boolean>(false);

    useEffect(()=>{
        TextTypingEffect(["Hello World!","My name is Michel","And I'm a","Frontend Developer"], 0.1, setBannerStringEffect)
        .then(()=>{setDisplayPosTextPresentation(true)});
    },[window]);

    const MotionButton = motion(Button);
    // const MotionAvatar = motion(Avatar);
   
    return(
        <section className={`h-[100vh] ${styles.flexCenter}`}>
            <h1 className="font-bannerFont text-9xl text-myColorGreen mt-40">{bannerStringEffect}</h1>
            <div className="absolute">
                <motion.img alt="Michel R Mota" src={avatarprofile} className="rounded-full"
                    initial={{opacity:0, y:-300, width: 0, height: 0}}
                    animate={{opacity:displayPosTextPresentation ? 1:0, y: -140 , width: 240, height: 240}}
                    transition={{type: "tween"}}
                />
            </div>
            <div className="absolute">
                <MotionButton 
                    initial={{y:400, opacity: 0}}
                    animate={{y: 250, opacity: displayPosTextPresentation ? 1 : 0}}
                    transition={{type: "spring"}}
                    variant="outlined"
                    sx={{
                        width: '200px',
                        backgroundColor: '#7CC6FE',
                        color: 'black',
                        fontWeight: 600,
                        borderRadius: '3rem',
                        padding: '0.7rem 0',
                        '&:hover': {color: '#7CC6FE'},           
                    }}
                >CONTACT</MotionButton>
            </div>
            
        </section>
    )    
}

export default About;




// const StyledButton = styled(Button)`
//     !important;
//     background-color: #7CC6FE !important;
//     color: black !important;
//     font-weight: 600 !important;
//     border-radius: 3rem !important;
//     padding: 0.7rem 0 !important;
//     z-index: 0 !important;

//     &:hover{
//         background-color: black !important;
//         color: white !important;
//         border-color: #7CC6FE !important;
//     }
// `
