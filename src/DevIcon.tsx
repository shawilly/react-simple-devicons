import { type CSSProperties, useCallback, useEffect, useState } from "react";
import { Loader } from "./components/loader";
import { type Scale, dimensions } from "./lib/constants/size";
import { deviconSvgUrl } from "./lib/devicon-svg-url";

const commonError =
	" Double check icon availability here: https://devicon.dev/";

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
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * Throw error with provided message, set isLoading to false and svgContent to null.
	 */
	const throwError = (message: string): void => {
		setIsLoading(false);
		setSvgContent(null);

		throw new Error(message + commonError);
	};

	const handleError = useCallback(throwError, []);

	useEffect((): void => {
		// Set scale
		if (props?.scale && dimensions[props.scale]) {
			setDimension(dimensions[props?.scale]);
		} else {
			setDimension(14);
		}

		// You can't change color of original style
		if (props?.style?.includes("original") && props?.color) {
			handleError(
				"Can't set color of original style. Try line(-woodmark) or plain(-woodmark) styles.",
			);
		}
	}, [props?.color, props?.scale, props?.style, handleError]);

	useEffect((): void => {
		setIsLoading(true);
		const fetchSvg = async (): Promise<void> => {
			try {
				const response = await fetch(deviconSvgUrl(icon, iconStyle));

				if (!response.ok) {
					handleError(
						`Fetch error: Unable to fetch icon '${icon}' with style '${iconStyle}'. HTTP status: ${response.status}`,
					);
				}

				const text = await response.text();

				if (!text) {
					handleError(
						`No svg text found for icon '${icon}' with style '${iconStyle}'. HTTP status: ${response.status}`,
					);
				}

				setSvgContent(text);
				setIsLoading(false);
			} catch (e) {
				handleError(`Error fetching the icon: ${(e as Error).message}`);
			}
		};

		fetchSvg(); // Directly call fetchSvg without a try-catch here
	}, [icon, iconStyle, handleError]);

	if (!(svgContent || isLoading)) {
		throwError(`Icon '${icon}' with style '${iconStyle}' not found.`);
	}

	const style: CSSProperties = {
		width: dimension,
		height: dimension,
		color: props.color || "inherit", // Use inherit if no color is provided
	};

	return isLoading || !svgContent ? (
		<Loader />
	) : (
		<div
			id={`dev-icon-${icon}-${iconStyle}`}
			data-testid="dev-icon"
			style={style}
			// Replace all color values to the provided color
			dangerouslySetInnerHTML={{
				__html: svgContent.replace(
					/fill="[^"]*"/g,
					`fill="${props.color || "currentColor"}"`,
				),
			}}
		/>
	);
}
