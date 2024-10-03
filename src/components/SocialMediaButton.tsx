interface SocialMediaButtonProps {
    link: string,
    logo: string,
    alt: string
}

export default function SocialMediaButton({ link, logo, alt }: SocialMediaButtonProps){
    let imageStyle = {
        width: '50px',
        height: '50px',
    }
    return(
        <a href={link} target="_blank"style={imageStyle}>
            <img src={logo} alt={alt} style={imageStyle}/>
        </a>
    )
}