import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { DevIcon, type DevIconProps } from "../src";

const props: DevIconProps = {
	color: "black",
	icon: "typescript",
	scale: "lg",
	style: "plain",
};

// Create a mock implementation for fetch
global.fetch = vi.fn(() =>
	Promise.resolve({
		ok: true,
		status: 200,
		statusText: "OK",
		headers: new Headers(),
		url: "http://example.com/icon.svg",
		text: () => Promise.resolve('<svg><path d="M10 20"></path></svg>'),
	}),
) as unknown as typeof global.fetch;

it("fails to render original style with color", () => {
	expect(() => {
		render(<DevIcon {...props} style="original" color="red" />);
	}).toThrowError();
});

it("loads and renders the icon SVG content successfully", async () => {
	render(<DevIcon {...props} />);

	// Use the method of your choice to find the SVG element
	const svgElement = await screen.findByTestId("dev-icon");
	expect(svgElement).toBeInTheDocument();
});

it("matches the snapshot", () => {
	const { asFragment } = render(<DevIcon {...props} />);
	expect(asFragment()).toMatchSnapshot();
});
