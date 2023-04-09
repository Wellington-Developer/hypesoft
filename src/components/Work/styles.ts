import styled from 'styled-components'

export const WorkContainer = styled.div`
    padding: 100px 0;

    .work--container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    @media screen and (max-width: 1320px) {
        .work--container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 920px) {
        .work--container {
            grid-template-columns: 1fr;
        }
    }
`