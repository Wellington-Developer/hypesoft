import { Background } from "@/styles/Utils/Background"
import { Header } from "./Header"
import { MainContainer } from "./styles"
import { Intro } from "./Intro"
import { About } from "./About"
import { Service } from "./Service"
import { Work } from "./Work"
import { Companies } from "./Companies"
import { Banner } from "./Banner"
import { Testimonial } from "./Testimonial"

export const Main = () => {
    return (
        <MainContainer>
                <Background />
                <Header />
                <Intro />
                <About />
                <Service />
                <Work />
                <Companies />
                <Banner />
                <Testimonial />
        </MainContainer>
    )
}