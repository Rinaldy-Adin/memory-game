import styled from 'styled-components';

const Button = styled.button`
    align-items: center;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue',
        Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;

    &:hover,
    &:focus {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    width: 60vw;
    height: 80vh;
    background-color: ${({ theme: { colors } }) => colors.modalBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
`;

const Loading = () => (
    <LoadingWrapper>
        <div></div>
        <div></div>
        <div></div>
    </LoadingWrapper>
);

const LoadingWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    & div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    & div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    & div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
    @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 64px;
        }
        50%,
        100% {
            top: 24px;
            height: 32px;
        }
    }
`;

const ModalTitle = styled.div`
    font-family: 'Major Mono Display', monospace;
    font-size: 3rem;
`;

const ModalDescription = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    text-align: center;
    width: 40%;
`;

export {
    Button,
    ModalBackground,
    Modal,
    Loading,
    ModalTitle,
    ModalDescription,
};
