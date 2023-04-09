import { BoxService } from "../utils/BoxService"
import { ServiceContainer } from "./styles"

export const Service = () => {
    return (
        <ServiceContainer className="container-default">
            <div className="box-container">
                <BoxService text={"UI/UI Design"} link="UI Design"/>
                <BoxService text={"Product Design"} link="UI Design"/>
                <BoxService text={"Branding Design"} link="UI Design"/>
                <BoxService text={"Front End Development"} link="UI Design"/>
            </div>
        </ServiceContainer>
    )
}