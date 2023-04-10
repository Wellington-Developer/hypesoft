import { BoxService } from "../utils/BoxService"

// Styles
import { TitleCenter } from "../utils/TitleCenter/styles"
import { ServiceContainer } from "./styles"

export const Service = () => {
    return (
        <ServiceContainer className="container-default" id="services">
            <TitleCenter>
                <h1>My Services</h1>
            </TitleCenter>
            <div className="box-container">
                <BoxService text={"UI/UX Design"} link="#design"/>
                <BoxService text={"Product Design"} link="#product-design"/>
                <BoxService text={"Branding Design"} link="#branding-design"/>
                <BoxService text={"Front End Development"} link="#front-end"/>
            </div>
        </ServiceContainer>
    )
}