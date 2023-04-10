import { BoxWorkProps } from "@/../types/components/utils/BoxWork";
import { BoxWorkContainer } from "./styles"
import { useState } from "react"
import Image from "next/image";

// Assets
import arrowRight from '../../../../public/assets/icons/arrowRightBlack.svg';

export const BoxWork = ({ text, link, img }: BoxWorkProps) => {
    const [ isShown, setIsShow ] = useState(false);
    return (
        <BoxWorkContainer
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="img-work">
                {
                    img && (
                        <Image src={ img } alt="image work" width={ 424 } height={ 332 }/>
                    )
                }
            </div>
            <div className="info-work">
                <h1>{ text }</h1>
                <div className="info">
                    {
                        isShown && (
                            <a href={link}>View project</a>
                        )
                    }
                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 10.025H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </BoxWorkContainer>
    )
}