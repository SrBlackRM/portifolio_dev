import { ReactElement } from "react";
import SectionsFormat from "./SectionsFormat";
import SocialMedia from "./SocialMedia";


export default function About(): ReactElement{

    let highlightStyle = {
        color: 'blue',
        fontSize: '20px',

    }

    let cardStyle = {
        border: '1px solid',
        borderRadius: '5px',
        width: '70vw',
        height: '60%'
    }
    
    return(
        <SectionsFormat color="white" className="flex-col">
            <div style={cardStyle} className="flex">
                <div className="flex-col">
                    <h2 style={highlightStyle}>Quem sou</h2>
                    <h1>Michel R Mota</h1>
                    <h2>Engenheiro de Computação & Designer Frontend</h2>
                </div>
                <SocialMedia />
            </div>
        </SectionsFormat>
    )
}


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
