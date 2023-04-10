import Image from "next/image"
import { Button } from "../utils/Button/styles"
import { BannerContainer } from "./styles"

import arrowRight from '../../../public/assets/icons/arrowRightBlack.svg';

export const Banner = () => {
    return (
        <BannerContainer className="container-default">
            <h1>Got a project in mind? Let's make something awesome <span>together</span>.</h1>
            <Button primary>Hire me <Image src={arrowRight} alt="icon right" /></Button>
        </BannerContainer>
    )
}