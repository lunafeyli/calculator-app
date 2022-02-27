import { createStitches } from "@stitches/react";

const { styled, createTheme, theme } = createStitches({
	theme: {
		colors: {
			background1: "hsl(222, 26%, 31%)", // main
			background2: "hsl(223, 31%, 20%)", // toggle and keypad
			background3: "hsl(224, 36%, 15%)", // screen

			keyBackground1: "hsl(225, 21%, 49%)",
			keyShadow1: "hsl(224, 28%, 35%)",

			keyBackground2: "hsl(6, 63%, 50%)",
			keyShadow2: "hsl(6, 70%, 34%)",

			keyBackground3: "hsl(30, 25%, 89%)",
			keyShadow3: "hsl(28, 16%, 65%)",

			text: "hsl(221, 14%, 31%)",
			textMain: "hsl(0, 0, 100%)",
		},
	},
});

const lightTheme = createTheme({
	colors: {
		background1: "hsl(0, 0%, 90%)", // main
		background2: "hsl(0, 5%, 81%)", // toggle and keypad
		background3: "hsl(0, 0%, 93%)", // screen

		keyBackground1: "hsl(185, 42%, 37%)",
		keyShadow1: "hsl(185, 58%, 25%)",

		keyBackground2: "hsl(25, 98%, 40%)",
		keyShadow2: "hsl(25, 99%, 27%)",

		keyBackground3: "hsl(45, 7%, 89%)",
		keyShadow3: "hsl(35, 11%, 61%)",

		text: "hsl(60, 10%, 19%)",
		textMain: "hsl(0, 0, 100%)",
	},
});

const neonTheme = createTheme({
	colors: {
		background1: "hsl(268, 75%, 9%)", // main
		background2: "hsl(268, 71%, 12%)", // toggle and keypad
		background3: "hsl(268, 71%, 12%)", // screen

		keyBackground1: "hsl(281, 89%, 26%)",
		keyShadow1: "hsl(285, 91%, 52%)",

		keyBackground2: "hsl(176, 100%, 44%)",
		keyShadow2: "hsl(177, 92%, 70%)",

		keyBackground3: "hsl(268, 47%, 21%)",
		keyShadow3: "hsl(290, 70%, 36%)",

		text: "hsl(52, 100%, 62%)",
		textMain: "hsl(0, 0, 100%)",
	},
});

const themes = {
	dark: theme,
	light: lightTheme,
	neon: neonTheme,
};

const rem = (px: number) => px / 10 + "rem";

export { styled, themes, rem };
