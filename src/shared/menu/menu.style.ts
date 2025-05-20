import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    right: calc(0px + 2vw);
    top: calc(0px + 2vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    @media (min-width: 720px) {
        right: calc(0px + 1vw);
    top: calc(0px + 8vw);
    }
`

export const ProfileIcon = styled.img`
   max-width: 40px;
   max-width: 40px
`

export const Login = styled.div`
    border: black 2px solid;
    padding: 4px;
    &:hover {
        background-color: gray;
    }
`