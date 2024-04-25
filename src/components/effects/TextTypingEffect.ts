import { Dispatch, SetStateAction } from "react";

const TextTypingEffect = async (text: Array<string>, time: number, setter: Dispatch<SetStateAction<string>>) => {
    /* Time in seconds */
    time = time * 1000;

    for (const textElem of text) {
        let newString = "";
        
        for (const char of textElem) {
            newString += char;
            setter(newString);
            await new Promise(resolve => setTimeout(resolve, time));
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}

export default TextTypingEffect;