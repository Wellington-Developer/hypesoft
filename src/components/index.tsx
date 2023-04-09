import { Background } from "@/styles/Utils/Background"
import { Header } from "./Header"
import { MainContainer } from "./styles"
import { Intro } from "./Intro"
import { About } from "./About"

export const Main = () => {
    return (
        <MainContainer>
                <Background />
                <Header />
                <Intro />
                <About />
        </MainContainer>
    )
}