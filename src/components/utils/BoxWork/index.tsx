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
                    <Image src={ arrowRight } alt="arrow right" />
                </div>
            </div>
        </BoxWorkContainer>
    )
}