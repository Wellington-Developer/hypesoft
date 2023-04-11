import { BoxServiceProps } from "@/../types/components/utils/BoxService"

import { useState } from "react"
import Image from "next/image";

// Styles
import { Box } from "./styles"

// Assets
import columImg from '../../../../public/assets/icons/columns.svg';

export const BoxService = ({ text, link, icon, arrow }: BoxServiceProps) => {
    const [ isShow, setIsShow ] = useState(false);
    
    return (
        <Box 
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9999 3.33325L3.33325 11.6666L19.9999 19.9999L36.6666 11.6666L19.9999 3.33325Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33325 28.3333L19.9999 36.6666L36.6666 28.3333" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33325 20L19.9999 28.3333L36.6666 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <div className="info-side">
                <h1>{ text }</h1>
                <div className="message-link">
                    {
                        isShow && (
                            <a href={link}>DISCUSS NOW</a>
                        )
                    }
                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 10.025H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </Box>
    )
}