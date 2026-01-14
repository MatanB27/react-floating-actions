import { FC, ReactNode, SVGProps } from "react";
import DiscordIcon from "../assets/discord.svg";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import GoogleIcon from "../assets/google.svg";
import InstagramIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import PinterestIcon from "../assets/pinterest.svg";
import RedditIcon from "../assets/reddit.svg";
import SnapchatIcon from "../assets/snapchat.svg";
import TelegramIcon from "../assets/telegram.svg";
import TikTokIcon from "../assets/tiktok.svg";
import TwitchIcon from "../assets/twitch.svg";
import XIcon from "../assets/x.svg";
import WhatsAppIcon from "../assets/whatsapp.svg";
import YouTubeIcon from "../assets/youtube.svg";

interface ActionConfig {
  label: string;
  icon: string;
  color: string;
  iconVariant: "light" | "dark";
  buildHref?: (value: string) => string;
}

export const ACTION_MAP: Record<string, ActionConfig> = {
  whatsapp: {
    label: "WhatsApp",
    icon: WhatsAppIcon,
    color: "#25D366",
    iconVariant: "light",
    buildHref: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
  },
  instagram: { label: "Instagram", icon: InstagramIcon, color: "#E4405F", iconVariant: "light", },
  facebook: { label: "Facebook", icon: FacebookIcon, color: "#1877F2", iconVariant: "light", },
  x: { label: "X", icon: XIcon, color: "#000000", iconVariant: "light" },
  linkedin: { label: "LinkedIn", icon: LinkedInIcon, color: "#0A66C2", iconVariant: "light" },
  github: { label: "GitHub", icon: GithubIcon, color: "#181717", iconVariant: "light" },
  youtube: { label: "YouTube", icon: YouTubeIcon, color: "#FF0000", iconVariant: "light" },
  discord: { label: "Discord", icon: DiscordIcon, color: "#5865F2", iconVariant: "light" },
  google: { label: "Google", icon: GoogleIcon, color: "#4285F4", iconVariant: "light" },
  pinterest: { label: "Pinterest", icon: PinterestIcon, color: "#E60023", iconVariant: "light" },
  reddit: { label: "Reddit", icon: RedditIcon, color: "#FF4500", iconVariant: "light" },
  snapchat: { label: "Snapchat", icon: SnapchatIcon, color: "#FFFC00", iconVariant: "dark" },
  telegram: { label: "Telegram", icon: TelegramIcon, color: "#0088CC", iconVariant: "light" },
  tiktok: { label: "TikTok", icon: TikTokIcon, color: "#010101", iconVariant: "light" },
  twitch: { label: "Twitch", icon: TwitchIcon, color: "#9146FF", iconVariant:"light" },
};
