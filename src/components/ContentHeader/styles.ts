import styled from 'styled-components';

interface ITitleContanerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div<ITitleContanerProps>`
  > h1 {
    color: ${props => props.theme.colors.dark};
    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 5px solid ${props => props.lineColor};
      border-radius: 10px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;
  button { 
    margin: 1rem;
  }
`;