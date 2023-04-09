import styled from 'styled-components';

export const ServiceContainer = styled.div`
    padding-top: 70px;
    padding-bottom: 80px;

    .box-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    @media screen and (max-width: 1320px) {
        .box-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 620px) {
        .box-container {
            grid-template-columns: 1fr;
        }
    }
`