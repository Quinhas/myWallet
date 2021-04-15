import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.gray900};
  background-color: ${props => props.theme.colors.gray100};
  padding: 1.5rem;

  height: calc(100vh - 70px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 15px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.gray400};
    transition: all 0.3s;
    &:hover {
      background-color: ${props => props.theme.colors.gray500};
    }
    &:active {
      background-color: ${props => props.theme.colors.primary};
    }
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.gray200};
  }

`;

export default Container;