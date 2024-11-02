import renderer from "react-test-renderer";
import { expect, it } from "vitest";
import { DevIcon, type DevIconProps } from "../src";

const props: DevIconProps = {
	color: "black",
	icon: "typescript",
	scale: "lg",
	style: "original",
};

it("renders correctly", () => {
	const tree = renderer.create(<DevIcon {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
