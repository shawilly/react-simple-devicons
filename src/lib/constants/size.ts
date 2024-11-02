export type Scale =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl"
	| "8xl"
	| "9xl";

export const dimensions: Record<Scale, number> = {
	xs: 12,
	sm: 16,
	md: 24,
	lg: 32,
	xl: 40,
	"2xl": 48,
	"3xl": 56,
	"4xl": 64,
	"5xl": 72,
	"6xl": 80,
	"7xl": 96,
	"8xl": 112,
	"9xl": 128,
};
