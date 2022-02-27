import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<PresentationBit>
				{displayedValue}
				<IconWrapper style={{ "--size": 16 + "px" }}>
					<Icon id="chevron-down" strokeWidth={1} size={16}></Icon>
				</IconWrapper>
			</PresentationBit>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	/* Allow the select to span the full height in Safari */
	-webkit-appearance: none;
`;

const PresentationBit = styled.div`
	background-color: ${COLORS.transparentGray15};
	border-radius: 8px;
	padding: 12px 16px;
	padding-right: 52px;
	font-family: "roboto" sans-serif;
	font-weight: 400;
	font-size: 1rem;
	color: ${COLORS.gray700};

	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}
	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 8px;
	margin: auto;
	color: inherit;
	width: var(--size);
	height: var(--size);
	pointer-events: none;
`;

export default Select;
