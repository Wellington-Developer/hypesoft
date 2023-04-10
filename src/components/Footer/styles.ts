import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 53px;
    padding-bottom: 172px;

    img {
        max-width: 263px;
        padding-bottom: 24px;
    }

    p {
        font-size: 1.4rem;
        line-height: 20px;
        color: var(--color-gray-500);
    }
`;