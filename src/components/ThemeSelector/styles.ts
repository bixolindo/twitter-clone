import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const ThemeOptions = styled.button`
  width: 49px;
  height: 49px;
  border-radius: 50%;

  cursor: pointer;
  
  &.blue{
    background: #33A1F2;
  }
  &.yellow{
    background: rgb(221, 162, 73);
  }
  &.pink{
    background: rgb(187, 45, 90);
  }
  &.purple{
    background: rgb(124, 74, 201);
  }
  &.orange{
    background: rgb(250, 97, 33);
  }
  &.green{
    background: rgb(15, 184, 96);
  }
`;

