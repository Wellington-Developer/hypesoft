import Image from "next/image"
import { Button } from "../utils/Button/styles"
import { BannerContainer } from "./styles"

import arrowRight from '../../../public/assets/icons/arrowRightBlack.svg';

export const Banner = () => {
    return (
        <BannerContainer className="container-default">
            <h1>Got a project in mind? Let's make something awesome <span>together</span>.</h1>
            <Button primary>Hire me 
                <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 10.025H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
        </BannerContainer>
    )
}