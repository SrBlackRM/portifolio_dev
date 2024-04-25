import { useEffect, useState } from "react";
import { styles } from "../styles";

const About = () => {
    const [bannerStringEffect, setBannerStringEffect] = useState("")

    const textEffectTyping = (text: string, time: number) => {
        /* Time in seconds */
        time = time * 1000;
        const textArray = text.split('');
    
        let newString = "";

        setInterval(()=>{
            if(textArray.length === 0){
                clearInterval(this);
                return
            }
            newString = newString + textArray.shift();
            setBannerStringEffect(newString);
        },time);
    }

    useEffect(()=>textEffectTyping("Hello World!", 0.2),[]);

    return(
        <section className={`w-[100vw] h-[100vh] ${styles.flexCenter}`}>
            <h1 className="font-bannerFont text-9xl text-myColorGreen">{bannerStringEffect}</h1>
        </section>
    )
}

export default About;