import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0.5rem 0;
  border-radius: 5px;
  box-shadow: ${props => props.theme.elevations.md};
  color: ${props => props.theme.getColorContrast(props.theme.colors.secondary)};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: between;
  header {
    img {
      width: 35px;
      margin-left: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
`