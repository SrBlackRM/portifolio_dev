import { ReactElement } from "react";
import SectionsFormat from "./SectionsFormat";
import SocialMedia from "./SocialMedia";
import { developerImg } from "../assets";


export default function About(): ReactElement{

    let highlightStyle = {
        color: "#54ffc6",
        fontSize: '20px',
    }

    let cardStyle = {
        border: '1px solid #7D828C',
        borderRadius: '7px',
        width: '60vw',
        padding: '30px',
    }
    
    return(
        <SectionsFormat>
            <div style={cardStyle} className="gap-10 text-justify flex flex-row justify-around items-center">
                <div className="flex" >
                    <img src={developerImg} style={{borderRadius:"7px"}}/>
                </div>
                <div className="flex flex-col gap-3 max-w-md">
                    <div id="cabecalho">
                        <h2 style={highlightStyle}>Quem sou</h2>
                        <h1 style={{fontSize: '35px'}}>Michel Mota</h1>
                        <h2 style={{fontSize: '16px', color:'#7D828C'}}>Engenheiro de Computação & Designer Frontend</h2>
                    </div>
                    <div id="texto_sobre" className="mt-3">
                        <p style={{color: "#bfbfbf"}}>
                            Meu nome é Michel R. Mota, conhecido como "SrBlackRM". Estou cursando Engenharia de Computação e atuo como auxiliar de produção em uma empresa de produtos químicos. Paralelamente, desenvolvo sites institucionais e landing pages, ajudando empresas a conquistarem novos clientes e a estabelecerem sua presença digital. Também realizo manutenção e aprimoramento de sites já existentes, garantindo que eles continuem eficientes e atualizados.
                        </p>
                    </div>
                    <SocialMedia />
                </div>
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
