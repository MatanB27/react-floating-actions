import { useState } from "react";
import { Action, FloatingActionsProps } from "../Types";
import { ACTION_MAP } from "../ActionMap";
import "./FloatingActions.css";

export function FloatingActions({
  actions,
  animation = "pop",
  position = "bottom-right",
  spacing = 56,
}: FloatingActionsProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`fa-container ${position}`}>
      {actions.map((action, index) => {
        if (action.type === "custom") {
          return (
            <a
              key={index}
              href={action.href}
              className={`fa-item ${animation} ${open ? "open" : ""}`}
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: open
                  ? `translateY(-${(index + 1) * spacing}px)`
                  : undefined,
              }}
            >
              {action.icon}
            </a>
          );
        }

        const config = ACTION_MAP[action.type];

        return (
          <a
            key={index}
            href={config.buildHref(action.value)}
            target={config.target}
            aria-label={config.label}
            className={`fa-item ${animation} ${open ? "open" : ""}`}
            style={{
              transitionDelay: `${index * 50}ms`,
              transform: open
                ? `translateY(-${(index + 1) * spacing}px)`
                : undefined,
            }}
          >
            {config.icon}
          </a>
        );
      })}

      <button
        className="fa-main"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open actions"
      >
        +
      </button>
    </div>
  );
}
