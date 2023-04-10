import styled from 'styled-components';

export const Box = styled.div`
    width: 100%;
    padding: 32px;
    border-radius: 6px;
    background: var(--color-white);
    transition: all 0.3s ease-in-out;
    height: 351px;

    :hover {
        cursor: pointer;
    }

    .icon {
        margin-bottom: 100px;
        height: 100%;
        width: 100%;
        max-width: 35px;
        max-height: 35px;
    }

    .info-side {
        h1 {
            font-size: 3.2rem;
            line-height: 40px;
            font-weight: 400;
            color: var(--color-bg);
            max-width: 70%;
            position: relative;
            margin-bottom: 50px;
            
            :after {
                content: '';
                position: absolute;
                left: 0px;
                bottom: -16px;
                width: 64px;
                height: 3px;
                background: var(--color-pink);
                display: inline-block;
                opacity: 0.3;
                border-radius: 50px;
            }
        }

        .message-link {
            width: 100%;
            height: 20px;
            display: flex;
            gap: 12px;
            align-items: center;

            a {
                font-size: 1.6rem;
                color: var(--color-pink);
                font-weight: 600;
                line-height: 24px;
                text-transform: uppercase;
            }

            .svg {
                stroke: red;
            }
        }
    }
`