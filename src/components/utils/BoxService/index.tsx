import { BoxServiceProps } from "@/../types/components/utils/BoxService"
import { Box } from "./styles"

import { useState } from "react"

export const BoxService = ({ text, link, icon, arrow }: BoxServiceProps) => {
    const [ isShow, setIsShow ] = useState(false);
    
    return (
        <Box 
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="icon">
                
            </div>
            <div className="info-side">
                <h1>{ text }</h1>
                <div className="message-link">
                    {
                        isShow && (
                            <a href={link}>DISCUSS NOW</a>
                        )
                    }
                </div>
            </div>
        </Box>
    )
}