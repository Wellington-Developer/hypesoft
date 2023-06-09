import Image from "next/image"
import { Button } from "../utils/Button/styles"
import { BannerContainer } from "./styles"

import arrowRight from '../../../public/assets/icons/arrowRightBlack.svg';

import shapesContaienr from '../../../public/assets/icons/Shapes.svg';

export const Banner = () => {
    return (
        <BannerContainer className="container-default">
            <div className="shapes-container">
                <Image src={ shapesContaienr } alt="shapes" />
            </div>
            <h1>Got a project in mind? Let's make something awesome <span>together</span>.</h1>
            <Button primary>Hire me 
                <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 10.025H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.95 4.00012L34 10.0241L27.95 16.0491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
        </BannerContainer>
    )
}