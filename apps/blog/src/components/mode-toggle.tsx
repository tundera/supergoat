import { FC } from "react";
import { Icon, useColorMode, VisuallyHidden } from "reflexjs";

export type ModeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ModeToggle: FC<ModeToggleProps> = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      variant="button.icon"
      {...props}
    >
      <Icon name={colorMode === "light" ? "moon" : "sun"} size="5" />
      <VisuallyHidden>Toggle color mode</VisuallyHidden>
    </button>
  );
};
