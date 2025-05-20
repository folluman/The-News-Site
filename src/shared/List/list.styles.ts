import styled from "styled-components";


export const ListStyle = styled.div`
  height: auto;
  width: 320px;
  color: black;
  font-size: 1rem;
  margin-top: 30px;
`;

export const SearchUser = styled.input<{icon: string}>`
  width: 310px;
  height: auto;
  background-color: #d9d9d9;
  color: black;
  font-size: 1rem;
  background-image: url(${(props)=> props.icon});
  background-repeat: no-repeat;
  background-position: 6px center;
  background-size: 14px;
  &::placeholder {
    color: black;
    padding-left: 30px
  }
`;

export const UserStyle = styled.div`
    width: 320px;
    height: 85px;
    border: solid 2px black;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
`

export const TrashImg = styled.div`
    height: auto;
    width: auto;
    position: absolute;
    cursor: pointer;
    right: 10px;
    bottom: 0px;
`
