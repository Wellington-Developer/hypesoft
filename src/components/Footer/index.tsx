import Image from "next/image"
import { FooterContainer } from "./styles"
import hypeImg from '../../../public/assets/images/hypesoft.png'

export const Footer = () => {
    return (
        <FooterContainer>
            <Image src={ hypeImg } alt="Hypesoft logotipo" />
            <p>Made with ♥ by John and <a href="https://hypesoft-wellington-developer.vercel.app/">Hypesoft</a></p>
        </FooterContainer>
    )
}