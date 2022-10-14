import styled from "styled-components";

export const Border = styled.p`
  height: 40px;
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.button`
  height: 40px;
  width: 50%;
  border: 1px solid black;
  align-items: center;
  cursor: pointer;
`;

export const BackgroundPink = styled(Border)`
    background-color: pink;
`;