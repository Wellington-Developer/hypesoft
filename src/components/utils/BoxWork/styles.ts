import styled from 'styled-components';

export const BoxWorkContainer = styled.div`
    width: 100%;
    background: var(--color-white);
    border-radius: 5px;
    cursor: pointer;

    .img-work {
        height: 332px;
        width: 100%;
        border: 1px solid red;
        border-radius: 6px 6px 0 0;
    }

    .info-work {
        padding: 24px;
        width: 100%;
        height: 120px;

        h1 {
            padding-bottom: 16px;
            font-size: 2.4rem;
            line-height: 150%;
            font-weight: 400;
            color: var(--color-bg);
        }

        a {
            font-size: 1.6rem;
            text-transform: uppercase;
            color: var(--color-pink);
            font-weight: 600;
        }
    }
`