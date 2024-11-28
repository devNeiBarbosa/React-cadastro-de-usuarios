import styled from "styled-components";

export const ButtonTwo = styled.button`
    cursor: pointer;

    width: 180px;
    height: 40px;

    border: 1px solid #fff;
    border-radius: 14px;
    background-color: transparent;

    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    font-weight: 700;

    &:hover {
        transition: 0.2s ease-in-out;
        font-size: 20px;
    }

    &:active {
        font-size: 12px;
    }
`;