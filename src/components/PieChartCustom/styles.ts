import styled from 'styled-components';
import Color from 'color';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0.5rem 0;
  border-radius: 5px;
  box-shadow: ${props => props.theme.elevations.md};
  color: ${props => props.theme.getColorContrast(props.theme.colors.secondary)};
  padding: 1rem 1.5rem;
  display: flex;
`;


export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: end;
`;

export const SideLeft = styled.aside`
  h2 {
    margin-bottom: 1rem;
  }
`;


export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 120px;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.getColorContrast(props.theme.colors.light)};

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

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  div {
    color: ${props => props.theme.getColorContrast(props.color)};
    background-color: ${props => props.color};
    width: clamp(40px, 50px, 60px);
    height: 35px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
  }
`;