import {instalink, instalogo, whatslogo, whatslink} from '../assets'
import SocialMediaButton from './SocialMediaButton'

export default function SocialMedia(){
    let container = {
        marginTop: '30px',
        gap: 20,

        "&:hover":{
            border: '1px solid blue',
        }
    }

    return(
        <div className="flex flex-row-reverse" style={container}>
            <SocialMediaButton link={whatslink} logo={whatslogo} alt="whatsapp"/>
            <SocialMediaButton link={instalink} logo={instalogo} alt="instagram"/>
            {/* <SocialMediaButton link={linkedinlink} logo={linkedinlogo} alt="linkedin"/>
            <SocialMediaButton link={githublink} logo={githublogo} alt="github"/> */}
        </div>
    )
}