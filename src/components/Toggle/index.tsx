import { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = (props) => {
  return (
    <Container>
      <ToggleLabel>{props.labelLeft}</ToggleLabel>
      <ToggleSelector
        checked={props.checked}
        color="primary"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={props.onChange}
      />
      <ToggleLabel>{props.labelRight}</ToggleLabel>
    </Container>
  )
};

export default Toggle;