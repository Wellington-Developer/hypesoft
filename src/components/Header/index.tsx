import { HeaderContainer } from "./styles"
import { Link } from "react-scroll";

export const Header = () => {
    return (
        <HeaderContainer className="container-default">
            <ul>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} offset={50} duration={500}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
                        Works
                    </Link>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </HeaderContainer>
    )
}