import { HeaderContainer } from "./styles"

export const Header = () => {
    return (
        <HeaderContainer className="container-default">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#serices">Services</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </HeaderContainer>
    )
}