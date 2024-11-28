import styled from "styled-components";

export const ContainerLoading = styled.div `
    display: flex;
    position: fixed;
    top: 25px;
    z-index: 100;
    gap: 1px;

    .one:nth-child(1) {
        --delay: 0ms;
    }

    .one:nth-child(2) {
        --delay: 100ms;
    }

    .one:nth-child(3) {
        --delay: 200ms;
    }
`;

export const Loading = styled.div `
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.4;
    animation: jump 0.6s var(--delay) linear infinite;

    @keyframes jump {
        0% {
            opacity: 0.4;
            transform: translateY(0px);
        }

        33% {
            opacity: 0.7;
            transform: translateY(-9px);
        }

        66% {
            opacity: 0.4;
            transform: translateY(0px);
        }
    }
`;

export const MascaraLoading = styled.div `
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
`;