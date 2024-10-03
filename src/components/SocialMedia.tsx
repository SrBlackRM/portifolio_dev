import {instalink, instalogo, whatslogo, whatslink} from '../assets'
import SocialMediaButton from './SocialMediaButton'

export default function SocialMedia(){
    return(
        <div className="flex">
            <SocialMediaButton link={instalink} logo={instalogo} alt="instagram"/>
            <SocialMediaButton link={whatslink} logo={whatslogo} alt="whatsapp"/>
            {/* <SocialMediaButton link={linkedinlink} logo={linkedinlogo} alt="linkedin"/>
            <SocialMediaButton link={githublink} logo={githublogo} alt="github"/> */}
        </div>
    )
}