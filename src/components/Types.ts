export type theme = "light" | "dark";
export type position = "bottom-right" | "bottom-left";

export type BuiltInActionType =
  | "whatsapp"
  | "phone"
  | "gmail"
  | "googleMaps"
  | "instagram"
  | "facebook"
  | "x"
  | "linkedin"
  | "github"
  | "youtube"
  | "discord"
  | "google"
  | "pinterest"
  | "reddit"
  | "snapchat"
  | "telegram"
  | "tiktok"
  | "twitch";

export type Action = {
  type: BuiltInActionType;
  value: string;
};

export type AnimationType = "pop" | "slide" | "stagger" | "radial" | "fade" | "flip" ;

export type Options = {
  animation?: AnimationType;
  spacing?: number;
  position?: position;
  theme?: theme;
};

export type FloatingActionsProps = {
  actions: Action[];
  animation?: AnimationType;
  options?: Options;
};
