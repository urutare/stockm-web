import { Theme } from "@/types/theme.type";

interface ThemeValue {
  name: string;
  value: Theme;
}
export const themes: ThemeValue[] = [
  { name: "System", value: "system" },
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
];
