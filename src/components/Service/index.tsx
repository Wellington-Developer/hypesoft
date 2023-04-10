import { BoxService } from "../utils/BoxService"
import { TitleCenter } from "../utils/TitleCenter/styles"
import { ServiceContainer } from "./styles"

export const Service = () => {
    return (
        <ServiceContainer className="container-default" id="services">
            <TitleCenter>
                <h1>My Services</h1>
            </TitleCenter>
            <div className="box-container">
                <BoxService text={"UI/UX Design"} link="UI Design"/>
                <BoxService text={"Product Design"} link="UI Design"/>
                <BoxService text={"Branding Design"} link="UI Design"/>
                <BoxService text={"Front End Development"} link="UI Design"/>
            </div>
        </ServiceContainer>
    )
}