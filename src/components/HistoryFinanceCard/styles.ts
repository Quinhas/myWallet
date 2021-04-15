import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.elevations.sm};
  list-style: none;
  border-radius: 5px;
  margin: 0.8rem 0;
  padding: 0.8rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  &:hover  {
    opacity: .7s;
    transform: scale(1.01, 1.01);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0.5rem 0 0.5rem;
  > span {
    font-weight: bold;
  }
`

export const Tag = styled.div<ITagProps>`
  width: 5px;
  height: 100%;
  border-radius: 5px;
  background-color: ${props => props.color};
  position: absolute;
  left: 0;
`;