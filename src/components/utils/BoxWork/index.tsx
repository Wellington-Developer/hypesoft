import { BoxWorkProps } from "@/../types/components/utils/BoxWork";
import { BoxWorkContainer } from "./styles"
import { useState } from "react"
import Image from "next/image";

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
                {
                    isShown && (
                        <a href={link}>View project</a>
                    )
                }
            </div>
        </BoxWorkContainer>
    )
}