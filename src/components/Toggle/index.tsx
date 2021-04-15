import { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle: React.FC = () => {
  const [state, setState] = useState(true);
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={state}
        color="primary"
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={(value) => setState(value)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
};

export default Toggle;