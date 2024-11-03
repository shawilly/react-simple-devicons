import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "jsdom", // Ensures tests run in a browser-like environment
		setupFiles: "./tests/setup.js", // Points to a setup file for global configurations
		globals: true, // Enable global variables like expect
		passWithNoTests: true, // Allows the test run to pass if there are no tests
		coverage: {
			include: ["{src,tests}/**/*"], // Includes specified files for coverage
		},
	},
});
