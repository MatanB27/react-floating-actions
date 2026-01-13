import { ReactNode } from "react";

export type BuiltInActionType =
  | "whatsapp"
  | "phone"
  | "email"
  | "instagram";

export type BuiltInAction = {
  type: BuiltInActionType;
  value: string;
};

export type CustomAction = {
  type: "custom";
  label: string;
  icon: ReactNode;
  href: string;
};

export type Action = BuiltInAction | CustomAction;


export type AnimationType = "pop" | "slide" | "stagger" | "radial";

export type Option = {
  animation?: AnimationType;
  spacing?: number;
  position?: "bottom-right" | "bottom-left" ;
}

export type FloatingActionsProps = {
  actions: Action[];
  animation?: AnimationType;
  options?: Option;
};
