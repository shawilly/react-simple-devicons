import { type CSSProperties, useEffect, useState } from "react";
import { type Scale, dimensions } from "./lib/constants/size";
import { deviconSvgUrl } from "./lib/devicon-svg-url";

export type DevIconProps = {
	color?: string;
	icon?: string;
	scale?: Scale;
	style?:
		| "line"
		| "line-woodmark"
		| "original"
		| "original-woodmark"
		| "plain"
		| "plain-woodmark";
};

export function DevIcon(props: DevIconProps) {
	const icon = props?.icon || "devicon";
	const iconStyle = props?.style || "plain";

	const [svgContent, setSvgContent] = useState<string | null>(null);
	const [dimension, setDimension] = useState<number>();

	useEffect(() => {
		if (props?.scale && dimensions[props.scale]) {
			setDimension(dimensions[props?.scale]);
		} else {
			setDimension(14);
		}
	}, [props?.scale]);

	useEffect(() => {
		const fetchSvg = async () => {
			try {
				const response = await fetch(deviconSvgUrl(icon, iconStyle));

				if (!response.ok) {
					throw new Error(
						`Fetch error: Unable to fetch icon '${icon}' with style '${iconStyle}'. HTTP status: ${response.status}`,
					);
				}

				const text = await response.text();
				setSvgContent(text);
			} catch (e) {
				throw new Error(`Error fetching the icon: ${(e as Error).message}`);
			}
		};

		fetchSvg();
	}, [icon, iconStyle]);

	if (!svgContent) {
		return null; // You can also return a loading spinner here
	}

	const style: CSSProperties = {
		width: dimension,
		height: dimension,
		color: props.color || "inherit", // Use inherit if no color is provided
	};

	// You can also use regex to replace the color in the SVG directly
	const svgWithColor = svgContent.replace(
		/fill="[^"]*"/g,
		`fill="${props.color || "currentColor"}"`,
	);

	return (
		<div
			id={`dev-icon-${icon}-${iconStyle}`}
			style={style}
			dangerouslySetInnerHTML={{ __html: svgWithColor }}
		/>
	);
}
