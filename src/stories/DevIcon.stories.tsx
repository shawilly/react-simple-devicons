import type { Meta, StoryFn } from "@storybook/react";

import { DevIcon } from "../DevIcon";

export default {
	title: "DevIcon",
	component: DevIcon,
	argTypes: {},
} as Meta<typeof DevIcon>;

const Template: StoryFn<typeof DevIcon> = (args) => <DevIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	color: "black",
	icon: "typescript",
	scale: "xl",
	style: "original",
};
