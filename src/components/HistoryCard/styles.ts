import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 340px;
	margin: 0.5rem 0;
	background-color: ${(props) => props.theme.colors.white};
	color: ${(props) => props.theme.colors.black};
	padding: 1rem 1.5rem;
	border-radius: 5px;
	box-shadow: ${(props) => props.theme.elevations.sm};
`;
