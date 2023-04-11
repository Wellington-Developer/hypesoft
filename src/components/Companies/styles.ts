import styled from 'styled-components';

export const CompaniesContainer = styled.div`
    display: grid;
    grid-template-columns: 360px 1fr 1fr 1fr 1fr 1fr;
    gap: 14px;
    padding-top: 100px;
    padding-bottom: 169px;

    .left-side {
        h1 {
            font-size: 3.2rem;
            line-height: 40px;
            color: var(--color-white);
            font-weight: 400;
            padding-right: 40px;

            span {
                color: var(--color-pink);
            }
        }
    }

    .box {
        width: 100%;
        background: var(--color-white);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;

    }

    @media screen and (max-width: 995px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`