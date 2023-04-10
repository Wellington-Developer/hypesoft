import { BoxServiceProps } from "@/../types/components/utils/BoxService"

import { useState } from "react"
import Image from "next/image";

// Styles
import { Box } from "./styles"

// Assets
import arrowLeftImg from '../../../../public/assets/icons/arrowRightBlack.svg';
import columImg from '../../../../public/assets/icons/columns.svg';

export const BoxService = ({ text, link, icon, arrow }: BoxServiceProps) => {
    const [ isShow, setIsShow ] = useState(false);
    
    return (
        <Box 
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="icon">
                <Image src={ columImg } alt="Column" />
            </div>
            <div className="info-side">
                <h1>{ text }</h1>
                <div className="message-link">
                    {
                        isShow && (
                            <a href={link}>DISCUSS NOW</a>
                        )
                    }
                    <Image src={ arrowLeftImg } alt="arrow"/>
                </div>
            </div>
        </Box>
    )
}