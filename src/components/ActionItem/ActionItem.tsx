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
  const config = ACTION_MAP[action.type];

  if (!config) {
    return null;
  }

  return (
    <a
      href={config?.buildHref?.(action.value) ?? action.value}
      target="_blank"
      className={`fa-item ${animation} ${open ? "open" : ""}`}
      style={
        {
          transitionDelay: open ? `${index * 40}ms` : "0ms",
          backgroundColor: config?.color,
          "--target": transform,
        } as React.CSSProperties
      }
    >
      <img
        src={config?.icon}
        alt={config?.label ?? ""}
        width={config?.size}
        height={config?.size}
      />
    </a>
  );
};
