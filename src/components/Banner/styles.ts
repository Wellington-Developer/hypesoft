import styled from 'styled-components'

export const BannerContainer = styled.div `
    width: 100%;
    height: 312px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 220px;
    border-radius: 5px;
    position: relative;

    .shapes-container {
        position: absolute;
        z-index: -2;

        svg, img {
            object-fit: cover;
        }
    }

    h1 {
        text-align: center;
        font-size: 3.2rem;
        line-height: 48px;
        font-weight: 400;
        max-width: 600px;
        color: var(--color-white);
        padding-bottom: 32px;
        
        span {
            color: var(--color-pink);
        }
    }
`