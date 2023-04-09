import { BoxWorkContainer } from "./styles"
import { useState } from "react"

export const BoxWork = ({ text, link }) => {
    const [ isShown, setIsShow ] = useState(false);
    return (
        <BoxWorkContainer
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="img-work"></div>
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