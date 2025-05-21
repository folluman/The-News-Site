import styled from "styled-components";

export const TextNews = styled.textarea`
  resize: none;
  width: 310px;
  height: 30px;
  background-color: white;
  font-size: 1.2rem;
  &::placeholder {
    padding: 1%;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 720px;
    width: 700px;
    &::placeholder {
      padding: 0%;
    }
  }
`;

export const FormNews = styled.form`
  @media (min-width: 720px) {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    gap: 6px;
  }
`;
