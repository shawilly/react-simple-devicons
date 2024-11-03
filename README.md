# simple-react-devicon

`simple-react-devicon` is a React component library for displaying [devicons](https://devicon.dev/) icons as SVGs, offering customizable styles, color, and scaling.

## Installation

To install, use your preferred package manager:

```bash
npm install simple-react-devicon
```

```bash
pnpm install simple-react-devicon
```

```bash
yarn add simple-react-devicon
```

## Usage

Import the `DevIcon` component into your React application:

```tsx
import React from "react";
import { DevIcon } from "simple-react-devicon";

export default function App() {
  return (
    <div>
      <DevIcon icon="react" color="#61dafb" scale="3xl" style="plain" />
    </div>
  );
}
```

### Properties

The `DevIcon` component accepts the following props:

| Prop    | Type                                                                                                           | Description                                                                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `color` | `string`                                                                                                       | Optional color for the icon. **Note:** Color cannot be applied if using the `original` style.                           |
| `icon`  | `string`                                                                                                       | Icon name (e.g., `"react"`, `"javascript"`). Check available icons at [devicon.dev](https://devicon.dev/).              |
| `scale` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl" \| "7xl" \| "8xl" \| "9xl"` | Scale of the icon, setting its dimensions in pixels. Default is `"md"` (24px). See [Scale Values](#scale-values) below. |
| `style` | `"line" \| "line-woodmark" \| "original" \| "original-woodmark" \| "plain" \| "plain-woodmark"`                | Optional style for the icon. **Note:** Color is only customizable with `line` and `plain` styles.                       |

### Scale Values

The `scale` prop adjusts the icon's dimensions. Here’s a list of predefined sizes:

| Scale Value | Pixel Dimensions |
| ----------- | ---------------- |
| `xs`        | 12px             |
| `sm`        | 16px             |
| `md`        | 24px             |
| `lg`        | 32px             |
| `xl`        | 40px             |
| `2xl`       | 48px             |
| `3xl`       | 56px             |
| `4xl`       | 64px             |
| `5xl`       | 72px             |
| `6xl`       | 80px             |
| `7xl`       | 96px             |
| `8xl`       | 112px            |
| `9xl`       | 128px            |

### Example

```tsx
import React from "react";
import { DevIcon } from "simple-react-devicon";

const App = () => {
  return (
    <div>
      {/* React icon with custom color and size */}
      <DevIcon icon="react" color="#61dafb" style="plain" scale="5xl" />

      {/* JavaScript icon in original style */}
      <DevIcon icon="javascript" style="original" scale="md" />
    </div>
  );
};

export default App;
```

### Error Handling

If an icon or style is unavailable, `DevIcon` throws an error with a message directing you to [devicon.dev](https://devicon.dev/) to confirm icon availability.

## Acknowledgments

This project was built using the [TypeScript React Package Starter](https://github.com/TimMikeladze/typescript-react-package-starter) as a foundation. Thank you to Tim Mikeladze for providing this helpful starter template!
