import React from "react";
import { AtSign } from "react-feather";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
	small: {
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
		height: 24,
	},
	large: {
		fontSize: 18,
		iconSize: 24,
		borderThickness: 2,
		height: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = STYLES[size];

	return (
		<InputWrapper style={{}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper style={{ "--size": styles.iconSize + "px" }}>
				<Icon id={icon} size={styles.iconSize} />
			</IconWrapper>
			<NativeInput
				{...delegated}
				style={{
					"--width": width + "px",
					"--height": styles.height + "px",
					"--border": styles.borderThickness + "px",
					"--font-size": styles.fontSize + "px",
				}}
			/>
		</InputWrapper>
	);
};

const InputWrapper = styled.div`
	position: relative;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	width: var(--size);
	height: var(--size);
	color: inherit;
`;

const NativeInput = styled.input`
	height: var(--height);
	width: var(--width);
	padding-left: var(--height);
	font-size: var(--font-size);
	border: none;
	border-bottom: var(--border) solid ${COLORS.transparentGray30};
	color: inherit;
	font-weight: 700;
	outline-offset: 2px;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
`;

export default IconInput;
