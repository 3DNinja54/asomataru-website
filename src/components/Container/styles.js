import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	${(props) =>
		props.text &&
		css`
			width: 75%;
		`}
`;

export default StyledContainer;
