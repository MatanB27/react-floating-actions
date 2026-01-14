import { ACTION_MAP } from "../ActionMap";
import "./ActionItem.css";

interface ActionItemProps {
  action: any;
  index: number;
  open: boolean;
  animation: string;
  transform: string;
}

export const ActionItem = ({
  action,
  index,
  open,
  animation,
  transform,
}: ActionItemProps) => {
  const config = action.type === "custom" ? null : ACTION_MAP[action.type];

  if (action.type !== "custom" && !config) {
    return null;
  }

  return (
    <a
      href={
        action.type === "custom"
          ? action.href
          : config?.buildHref?.(action.value)
      }
      target="_blank"
      rel="noopener noreferrer"
      className={`fa-item ${animation} ${open ? "open" : ""}`}
      style={
        {
          transitionDelay: open ? `${index * 40}ms` : "0ms",
          backgroundColor: action.type === "custom" ? "#333" : config?.color,
          zIndex: 100 - index,
          "--target": transform,
        } as React.CSSProperties
      }
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
};
