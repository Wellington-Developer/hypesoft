import styled from 'styled-components';

export const TitleCenter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;

    h1 {
        color: var(--color-white);
        font-size: 4.0rem;
        line-height: 128%;
        font-weight: 400;
        position: relative;

        :after {
            content: '';
            position: absolute;
            width: 80px;
            height: 3px;
            bottom: -16px;
            left: -50%;
            right: -50%;
            margin: auto;
            background: var(--color-pink);
            border-radius: 3px;
        }
    }
`