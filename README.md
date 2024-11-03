<p align="center">
  <a href="https://github.com/shawilly/react-simple-devicons/stargazers"><img src="https://img.shields.io/github/stars/shawilly/react-simple-devicons?colorA=192330&colorB=f8e7b0&style=for-the-badge"></a>
  <a href="https://github.com/shawilly/react-simple-devicons/issues"><img src="https://img.shields.io/github/issues/shawilly/react-simple-devicons?colorA=192330&colorB=98d4e7&style=for-the-badge"></a>
  <a href="https://github.com/shawilly/react-simple-devicons/contributors"><img src="https://img.shields.io/github/contributors/shawilly/react-simple-devicons?colorA=192330&colorB=b4e49a&style=for-the-badge"></a>
  <a href="https://github.com/shawilly/react-simple-devicons/network/members"><img src="https://img.shields.io/github/forks/shawilly/react-simple-devicons?colorA=192330&colorB=bdb2ff&style=for-the-badge"></a>
</p>

# react-simple-devicons

`react-simple-devicons` is a React component library for displaying [devicons](https://devicon.dev/) icons as SVGs, offering customizable styles, color, and scaling.

## Installation

To install, use your preferred package manager:

```bash
npm install react-simple-devicons
```

```bash
pnpm install react-simple-devicons
```

```bash
yarn add react-simple-devicons
```

## Usage

Import the `DevIcon` component into your React application:

```tsx
import React from "react";
import { DevIcon } from "react-simple-devicons";

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
import { DevIcon } from "react-simple-devicons";

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

Here’s a revised version of your section on implementing Server-Side Rendering (SSR):

## Implementing Server-Side Rendering (SSR)

To learn about using Server-Side Rendering with [Next.js](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns), please refer to the official documentation.

### Step 1: Create a Component for `DevIcon`

First, create a component that wraps `DevIcon` (_app/devicon.tsx_):

```tsx
import { DevIcon } from "react-simple-devicons";

const DevIcon = () => {
  return <DevIcon />;
};

export default DevIcon;
```

### Step 2: Import the Component into Your Pages

Next, import the newly created component into your pages (_app/page.tsx_):

```tsx
import DevIcon from "./DevIcon";

export default function Page() {
  return (
    <div>
      <p>View Dev Icons</p>

      {/* Works since DevIcon is a Client Component */}
      <DevIcon />
    </div>
  );
}
```

### Error Handling

If an icon or style is unavailable, `DevIcon` throws an error with a message directing you to [devicon.dev](https://devicon.dev/) to confirm icon availability.

## Acknowledgments

This project was built using the [TypeScript React Package Starter](https://github.com/TimMikeladze/typescript-react-package-starter) as a foundation. Thank you to Tim Mikeladze for providing this helpful starter template.
