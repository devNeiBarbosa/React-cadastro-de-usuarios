import styled from "styled-components";

export const ButtonOne = styled.button `

    cursor: pointer;
    width: 300px;
    height: 50px;

    border: none;
    border-radius: 14px;
    background-image: linear-gradient(180deg, 
        #3b1de1 0, #2c16b6 25%, #1d0f8c 50%, #0f0762 75%, #000038 100%);

    color: rgba(255, 255, 255, 1);
    font-size: 22px;
    font-weight: 500;
    margin-top: 20px;

    &:hover {
        background-image: 
        linear-gradient(180deg, 
            rgba(59, 29, 225, 0.94) 0%, rgba(44, 22, 182, 0.96) 25%, rgba(29, 15, 140, 0.95) 50%, rgba(15, 7, 98, 0.98) 75%, rgba(0, 0, 56, 0.97) 100%);
    }

    &:active {
        font-size: 12px;
        transition: 0.3s ease-in-out;
        opacity: 0.6;
}
`;