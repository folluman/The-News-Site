import styled from "styled-components";

const borderColor = "#1E3440";
export const inputColor = "#white";
const colorInputSearch = "#ACACAC";

export const InputStyle = styled.input<{ icon: string }>`
  background-color: ${inputColor};
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: 6px center;
  background-size: 24px;
  padding-left: 35px;
  width: 250px;
  height: 5vh;
  border-radius: 10px;
  border: ${borderColor};
  color: black;
  margin-bottom: 5px;
  font-size: 1rem;

  &::placeholder {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const LinkStyle = styled.div`
  font-size: 2.2rem;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 40px;

  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding-bottom: 8px;
    color: white;
    overflow: hidden; /* Para conter o pseudo-elemento */

    /* Linha base (invisível quando inativo) */
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #0AD8D8;
      border-radius: 3px 3px 0 0;
      transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    }

    &[data-active="true"]::after {
      width: 100%;
    }
   
    &:active::after {
      animation: rippleEffect 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }
  }

  @keyframes rippleEffect {
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    50% {
      transform: scaleX(1.1); /* Pequeno overshoot para efeito elástico */
      opacity: 0.8;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

export const InputDiv = styled.div`
  height: auto;
  @media (min-width: 360px) {
    text-align: center;
    
    div {
      margin-bottom: 20px;
    }
  }
`;

export const ErrorText = styled.div`
  color: red;
  margin-bottom: 15px;
  text-align: center;
`;

export const UserCreatedText = styled.div`
  color: aqua;
  margin-bottom: 15px;
  text-align: center;
`

export const Input = styled.input<{icon: string}>`
  background-color: ${colorInputSearch};
  background-image: url(${(props) => props.icon});
  width: 300px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: 6px center;
  background-size: 24px;
  color: white;
  font-size: 1rem;
  border-radius: 20px;
  border: ${borderColor};
  padding-left: 35px;

  &::placeholder {
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
`;
