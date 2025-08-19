import styled from 'styled-components';
import { Button } from '../Button';

export const Popup = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	background: #fff;
	box-sizing: border-box;
	padding: 24px;
	border-radius: 8px;
	position: relative;
	box-shadow:
		0px 16px 32px 0px #4c57650f,
		0px 8px 16px 0px #4c576514,
		0px 4px 8px 0px #4c57651a,
		0px 2px 4px 0px #4c57651f,
		0px 0px 2px 0px #4c576524;
	width: 520px;
`;

export const Overlay = styled.div`
	overflow-x: auto;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.4);
	z-index: 999;
	align-content: center;
`;

export const CloseButton = styled(Button)`
	cursor: pointer;
`;
