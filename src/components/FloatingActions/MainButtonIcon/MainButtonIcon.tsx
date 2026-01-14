import "./MainButtonIcon.css";

interface MainButtonIconProps {
  isOpen: boolean;
}

export const MainButtonIcon = ({ isOpen }: MainButtonIconProps) => {
  return (
    <div className="fa-main-icon-wrapper">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={`fa-svg-icon ${isOpen ? "active" : ""}`}
      >
        <line className="line-1" x1="12" y1="5" x2="12" y2="19" />
        <line className="line-2" x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </div>
  );
};
