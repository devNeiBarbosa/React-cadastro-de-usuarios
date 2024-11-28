import styled from "styled-components";

export const Navbar = styled.nav `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    position: fixed;
    top: 0px;
    left: 0;

    background: rgb(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 28px;
    font-style: italic;
    text-align: center;
`;