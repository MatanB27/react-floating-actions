import { useState } from "react";
import { FloatingActionsProps } from "../Types";
import "./FloatingActions.css";
import { MainButtonIcon } from "./MainButtonIcon/MainButtonIcon";
import { ActionItem } from "../ActionItem/ActionItem";
import { getPosition } from "../../utils";

export function FloatingActions({ actions, options }: FloatingActionsProps) {
  const [open, setOpen] = useState(false);
  const {
    animation = "slide",
    spacing = 60,
    position = "bottom-right",
    theme = "light",
  } = { ...options };

  const isRight = position.includes("right");
  const multiplierX = isRight ? -1 : 1;

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
