import styled from 'styled-components';

export const TabContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 24px;
	color: var(--color-neutral-grey-light);
`;

export const TabContainerSpaceBetween = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	color: var(--color-neutral-grey-light);
	width: 100%;
`;

export const TabButton = styled.button<{ $active: boolean }>`
	padding: 12px 20px;
	font-size: 14px;
	font-weight: bold;
	color: ${(props) => (props.$active ? 'var(--color-accent)' : 'var(--color-primary)')};
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		color: var(--color-accent);
	}
`;

export const TabButtonSpaceBetween = styled.button<{ $active: boolean }>`
	padding: 12px 20px;
	font-size: 14px;
	font-weight: bold;
	color: ${(props) => (props.$active ? 'var(--color-accent)' : 'var(--color-primary)')};
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s;
	flex: 1;

	&:hover {
		color: var(--color-accent);
	}
`;

export const Underline = styled.div<{ left: number; width: number }>`
	position: absolute;
	bottom: 0;
	height: 2px;
	background-color: var(--color-accent);
	transition:
		left 0.3s ease,
		width 0.3s ease;
	left: ${(props) => props.left}px;
	width: ${(props) => props.width}px;
`;

export const TabPanel = styled.div`
	padding-top: 16px;
`;
