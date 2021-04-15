import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0 0.5rem 0;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  background: none;
  color: ${props => props.theme.colors.dark};
  margin: 0 0.5rem;
  transition: all 0.3s;
  :hover {
    transform: scale(1.01, 1.01);
  }
  &::after {
    content: '';
    display: block;
    width: 80%;
    margin: 0 auto;
    border-bottom: 5px solid ${props => props.color};
    border-radius: 5px;
  }

`