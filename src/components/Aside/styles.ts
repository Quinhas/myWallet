import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow_sm};
  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.black};
  margin-left: 10px;
`;

export const Img = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`

export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.theme.colors.complementary};
  }

  > svg {
    margin-right: 0.5rem; 
  }
`;
