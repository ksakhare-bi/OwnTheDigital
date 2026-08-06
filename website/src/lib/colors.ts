/**
 * Named color tokens from Figma (Final board).
 * Prefer Tailwind classes in UI: `bg-primary`, `text-navy`, `border-border`.
 * Use this object when you need hex values in JS/TS.
 */
export const colors = {
  primary: "#2356F6",
  navy: "#0F1D38",
  success: "#298267",

  body: "#484848",
  muted: "#71727A",
  ink: "#1E1E1E",
  black: "#000000",
  white: "#FFFFFF",

  background: "#F7F9FF",
  surface: "#FFFFFF",
  surfaceSoft: "#F3F6FF",
  surfacePale: "#EEF3FF",
  surfaceTint: "#E9EFFE",
  surfaceNeutral: "#F0F0F0",
  surfaceWarm: "#ECE7E2",

  border: "#E8EAEE",
  borderStrong: "#E6E7EB",
  gray: "#848484",
  grayLight: "#D9D9D9",

  shadow: "#00000040",
  shadowStrong: "#000000D9",
  glow: "#0062FF08",
  transparent: "#FFFFFF00",
  accentFade: "#2D00E500",
} as const;

export type ColorName = keyof typeof colors;

export function getColor(name: ColorName): string {
  return colors[name];
}
