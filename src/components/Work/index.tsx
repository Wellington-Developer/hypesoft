import { BoxWork } from "../utils/BoxWork"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { WorkContainer } from "./styles"

export const Work = () => {
    return (
        <WorkContainer className="container-default">
            <TitleCenter>
                <h1>My Selected Work</h1>
            </TitleCenter>
            <div className="work--container">
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
            </div>
        </WorkContainer>
    )
}