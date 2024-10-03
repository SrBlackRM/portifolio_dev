import { ReactElement } from "react";
import { useEffect, useState } from "react";
import { TextTypingEffect } from "./effects";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { avatarprofile, whatslink } from "../assets";
import SectionsFormat from "./SectionsFormat";

export default function Presentation(): ReactElement{
    const [bannerStringEffect, setBannerStringEffect] = useState<string>("");
    const [displayPosTextPresentation, setDisplayPosTextPresentation] = useState<boolean>(false);

    useEffect(()=>{
        TextTypingEffect(["Meu nome e Michel","E eu sou","Desenvolvedor Web"], 0.1, setBannerStringEffect)
        .then(()=>{setDisplayPosTextPresentation(true)});
    },[window]);

    const MotionButton = motion(Button);
    // const MotionAvatar = motion(Avatar);
   
    return(
        <SectionsFormat>
            <h1 className="font-bannerFont text-9xl text-myColorGreen mt-40">{bannerStringEffect}</h1>
            <div className="absolute">
                <motion.img alt="Michel R Mota" src={avatarprofile} className="rounded-full"
                    initial={{opacity:0, y:-300, width: 0, height: 0}}
                    animate={{opacity:displayPosTextPresentation ? 1:0, y: displayPosTextPresentation ? -140 : -300, width: 240, height: 240}}
                    transition={{type: "spring"}}
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
                onClick={()=>{window.open(whatslink, '_blank')}}>CONTATO</MotionButton>
            </div>
            
        </SectionsFormat>
    )    
}