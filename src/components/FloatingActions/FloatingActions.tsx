import { useState } from "react";
import { MainButtonIcon } from "./MainButtonIcon/MainButtonIcon";
import { ActionItem } from "../ActionItem/ActionItem";
import { getPosition } from "../../utils";
import { Action, Options } from "../Types";
import { Positions } from "../../constants";
import "./FloatingActions.css";

export interface FloatingActionsProps {
  actions: Action[];
  options?: Options;
}

export interface FloatingActionsProps {
  /**
   * Actions displayed when the floating button is expanded.
   */
  actions: Action[];

  /**
   * Optional configuration for animation, spacing, position, and theme.
   */
  options?: Options;
}

/**
 * FloatingActions
 *
 * A floating action button (FAB) that expands to reveal a list of
 * platform-specific actions.
 *
 * @example
 * ```tsx
 * <FloatingActions
 *   actions={[
 *     { type: "whatsapp", value: "0501234567" },
 *     { type: "gmail", value: "support@example.com" },
 *     { type: "instagram", value: "https://instagram.com/username" },
 *   ]}
 *   options={{
 *     position: "bottom-right",
 *     theme: "dark",
 *     animation: "radial",
 *     spacing: 75,
 *   }}
 * />
 * ```
 */
export function FloatingActions({ actions, options }: FloatingActionsProps) {
  const [open, setOpen] = useState(false);
  const {
    animation = "pop",
    spacing = 60,
    position = "bottom-right",
    theme = "light",
  } = { ...options };

  const multiplierX = Positions.BOTTOM_RIGHT ? -1 : 1;

  return (
    <div className={`fa-container ${position}`}>
      {actions.map((action, index) => (
        <ActionItem
          key={index}
          action={action}
          index={index}
          open={open}
          animation={animation}
          transform={getPosition(index, animation, spacing, multiplierX)}
        />
      ))}
      <button
        className={`fa-main ${theme} ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <MainButtonIcon isOpen={open} />
      </button>
    </div>
  );
}
