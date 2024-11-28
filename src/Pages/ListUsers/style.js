import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const UsersListing = styled.img `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 350px;
    height: 210px;
    margin-top: 80px;

    border-radius: 15px;
    background-image: linear-gradient(180deg, 
        rgba(59, 29, 225, 0.44) 0%, 
        rgba(44, 22, 182, 0.46) 25%, 
        rgba(29, 15, 140, 0.45) 50%, 
        rgba(15, 7, 98, 0.48) 75%,
        rgba(0, 0, 56, 0.47) 100%);
`;

export const Ul = styled.ul `
    display: grid;
    grid-template-columns: 620px 620px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 40px;
    overflow-y: auto;

    .div-2 {
        margin-bottom: 30px;
    }
`;

export const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    border: none;
    border-radius: 70px;
    outline: none;

    background: linear-gradient(180deg, 
        rgba(255, 255, 255, 0.14) 0%, 
        rgba(255, 255, 255, 0.20) 25%, 
        rgba(255, 255, 255, 0.26) 50%, 
        rgba(255, 255, 255, 0.26) 75%,
        rgba(255, 255, 255, 0.30) 100%);
    backdrop-filter: blur(3px);

    padding: 10px;
    width: 620px;
    height: 120px;
`;

export const AvatarUser = styled.img `
    width: 80px;
`;

export const UserTextInfo = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: #fff;
    margin-bottom: 8px;
    margin-left: -10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 1.5);

    span {
        color: red;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;
        text-shadow: 2px 1px 2px rgba(0, 0, 0, 1.5);
    }
`;

export const ButtonLixeira = styled.button`
    background: none;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    margin-left: 15px;
    
    img {
        width: 22px;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(1000%) contrast(100%);

    
        &:hover {
            filter: invert(31%) sepia(93%) saturate(5881%) hue-rotate(355deg) brightness(93%) contrast(101%);
            transition: 0.1s ease-in-out;
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.7);
            transition: 0.1s ease-in-out;
        }
    }
`;
