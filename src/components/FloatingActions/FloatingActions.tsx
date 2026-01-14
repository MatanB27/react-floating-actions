import { useState } from "react";
import { FloatingActionsProps } from "../Types";
import { ACTION_MAP } from "../ActionMap";
import "./FloatingActions.css";

export function FloatingActions({ actions, options }: FloatingActionsProps) {
  const [open, setOpen] = useState(false);
  const {
    animation = "slide",
    spacing = 60,
    position = "bottom-right",
  } = { ...options };

  const isRight = position.includes("right");
  const multiplierX = isRight ? -1 : 1;

  return (
    <div className={`fa-container ${position}`}>
      {actions.map((action, index) => {
        const config =
          action.type === "custom" ? null : ACTION_MAP[action.type];
        if (action.type !== "custom" && !config) {
          return null;
        }

        let orbit = 0;
        let itemsInThisOrbit = 4;
        let tempIndex = index;

        while (tempIndex >= itemsInThisOrbit) {
          tempIndex -= itemsInThisOrbit;
          orbit++;
          itemsInThisOrbit = 4 + orbit * 2;
        }

        const currentOrbitCapacity = 4 + orbit * 2;
        const orbitRadius = spacing * (1.3 + orbit * 0.8);

        const angle = (tempIndex / (currentOrbitCapacity - 1)) * (Math.PI / 2);

        const radialX = Math.cos(angle) * orbitRadius * multiplierX;
        const radialY = -Math.sin(angle) * orbitRadius;

        const verticalY = -(index + 1) * spacing;

        let finalTransform = "";
        if (open) {
          if (animation === "radial") {
            finalTransform = `translate(${radialX}px, ${radialY}px)`;
          } else {
            finalTransform = `translateY(${verticalY}px)`;
          }
        }

        return (
          <a
            key={index}
            href={
              action.type === "custom"
                ? action.href
                : config?.buildHref?.(action.value)
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`fa-item ${animation} ${open ? "open" : ""}`}
            style={{
              transitionDelay: open ? `${index * 40}ms` : "0ms",
              backgroundColor:
                action.type === "custom" ? "#333" : config?.color,
              transform: finalTransform,
              zIndex: actions.length - index,
            }}
          >
            {action.type === "custom" ? (
              action.icon
            ) : (
              <img
                src={config?.icon}
                alt={config?.label}
                width={22}
                height={22}
                style={{
                  filter:
                    config?.iconVariant === "dark"
                      ? "brightness(0)"
                      : "brightness(0) invert(1)",
                }}
              />
            )}
          </a>
        );
      })}

      <button
        className={`fa-main ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="fa-plus">+</span>
      </button>
    </div>
  );
}
