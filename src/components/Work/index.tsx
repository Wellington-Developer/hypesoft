import { BoxWork } from "../utils/BoxWork"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { WorkContainer } from "./styles"

export const Work = () => {
    return (
        <WorkContainer className="container-default" id="works">
            <TitleCenter>
                <h1>My Selected Work</h1>
            </TitleCenter>
            <div className="work--container">
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Eduguar - E-learning Website" link="#site"/>
                <BoxWork text="Huma Marketing Agency" link="#site"/>
                <BoxWork text="Beeryblog Blog Website" link="#site"/>
                <BoxWork text="Educare Elearning website" link="#site"/>
                <BoxWork text="Blogy Blog Website" link="#site"/>
            </div>
        </WorkContainer>
    )
}