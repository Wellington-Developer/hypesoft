import styled from 'styled-components';

export const ExperienceData = styled.div `
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
        font-size: 5.6rem;
        color: var(--color-pink);
        font-weight: 400;
    }

    
    h3 {
        display: flex;
        font-size: 1.8rem;
        line-height: 28px;
        color: var(--color-white);
        font-weight: 400;
    }

    @media screen and (max-width: 1200px) {
        h2 {
            font-size: 4.0rem;
        }

        h3 {
            font-size: 1.4rem;
        }
    }
`