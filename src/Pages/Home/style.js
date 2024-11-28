import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ImageTop = styled.div`
    padding: 20px;
    margin-top: 20px;
    margin-bottom: -66px;
    z-index: 10;

    img {
        width: 180px;
    } 
`;

export const Form = styled.form`
    padding: 30px 20px;
    width: 350px;

    background: rgb(225, 225, 225, 0.2);
    backdrop-filter: blur(3px);
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    
`;

export const Label = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    margin-left: 10px;

    span {
        color: red;
        font-size: 16px;
        
    }
`;

export const Input = styled.input`
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    filter: drop-shadow(2px 4px 5px rgba(0, 0, 0, 9));
    outline: none;

    width: 300px;
    height: 35px;

    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

    font-size: 13px;
    line-height: 28px;
    color: #000;

    -moz-appearance: textfield;
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0
    }
`;

export const Select = styled.select`
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    filter: drop-shadow(2px 4px 5px rgba(0, 0, 0, 9));

    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;

    width: 150px;
    height: 35px;

    margin-bottom: 10px;
    margin-left: -10px;
    padding-left: 10px;
    padding-right: -3px;

    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
    color: #000;
   

    option {
        border: none;
        border-radius: 10px;
        background-color: #0f0762;
        color: #fff;
        font-size: 14px;
        font-weight: 500;      
    }
`;

export const ArrowSelect = styled.div `
    position: absolute;
    right: 35px;
    margin-top: 26px;
    pointer-events: none;
    
    img {
        width: 8px;
        opacity: 0.4;
    }
`;