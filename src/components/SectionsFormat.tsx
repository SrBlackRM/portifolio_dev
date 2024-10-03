import { ReactElement } from "react";
import { styles } from "../styles";

export interface SectionsFormatProps {
    children?: React.ReactNode;
    color?: 'white' | 'black';
    className?: string;
}

export default function SectionsFormat({children, color, className}: SectionsFormatProps): ReactElement{
    let displayColorClass: string = 'bg-white text-black';

    

    return(
        <section className={`h-[100vh] ${styles.flexCenter} ${color == 'white' ? displayColorClass : ''} ${className}`}>
            {children}
        </section>
    )
}