import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.light}
`;

export default Container;