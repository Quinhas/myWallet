import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';


export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.dark}
`;
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  })
)<ReactSwitchProps>`
  margin: 0em 0.5rem;
`;