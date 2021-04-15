import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.elevations.sm};
  padding: 0 1.8rem;
`

export const Profile = styled.div`
  color: ${props => props.theme.colors.dark};
`;

export const Welcome = styled.h3`

`;

export const UserName = styled.p`

`;
