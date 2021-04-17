import styled from 'styled-components';

interface IContainerProps {
  color: string;
}
export const Container = styled.div<IContainerProps>`
  background-color: ${props => props.color};
  margin: 0.5em 0em;
  width: 32%;
  border-radius: 5px;
  box-shadow: ${props => props.theme.elevations.md};
  padding: 1rem 1.5rem;
  color: ${props => props.theme.getColorContrast(props.color)};
  position: relative;
  overflow: hidden;
  z-index: 2;
  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -15px;
    z-index: -1;
    opacity: 0.3;
  }
  > small {
    font-size: 0.7rem;
  }
  > span {
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0;
  }
`