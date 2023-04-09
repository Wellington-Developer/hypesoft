import { Background } from "@/styles/Utils/Background"
import { Header } from "./Header"
import { MainContainer } from "./styles"
import { Intro } from "./Intro"
import { About } from "./About"
import { Service } from "./Service"

export const Main = () => {
    return (
        <MainContainer>
                <Background />
                <Header />
                <Intro />
                <About />
                <Service />
        </MainContainer>
    )
}