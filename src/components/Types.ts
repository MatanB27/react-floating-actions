import { Positions, Themes } from "../constants";

/**
 * Visual theme applied to the floating action button and items.
 */
export type Theme = (typeof Themes)[keyof typeof Themes];

/**
 * Screen corner where the floating action button is fixed.
 */
export type Position = (typeof Positions)[keyof typeof Positions];

/**
 * Built-in platforms supported by the floating action component.
 */
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

/**
 * A single action rendered inside the floating action menu.
 */
export interface Action {
  /**
   * Platform or service this action links to.
   */
  type: BuiltInActionType;

  /**
   * Destination value used to construct the action URL.
   *
   * @example
   * // Platform-specific values
   * whatsapp / phone: "0501234567"        // Digits only
   * gmail:             "name@email.com"
   * telegram:          "username"         // Without "@"
   * googleMaps:        "Address or Place Name"
   *
   * // All other platforms full URL
   */
  value: string;
}

/**
 * Animation used when action buttons appear and disappear.
 */
export type AnimationType =
  | "pop"
  | "slide"
  | "stagger"
  | "radial"
  | "fade"
  | "flip";

/**
 * Configuration options for the FloatingActions component.
 */
export interface Options {
  /**
   * Animation used when expanding or collapsing the action items.
   *
   * @default "pop"
   */
  animation?: AnimationType;

  /**
   * Distance (in pixels) between the main button and each action item.
   *
   * @default 60
   */
  spacing?: number;

  /**
   * Screen position where the floating action button is anchored.
   *
   * @default "bottom-right"
   */
  position?: Position;

  /**
   * Visual theme applied to buttons and icons.
   *
   * @default "light"
   */
  theme?: Theme;
}
