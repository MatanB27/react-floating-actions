import GmailIcon from "../assets/gmail.svg";
import DiscordIcon from "../assets/discord.svg";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import GoogleMapsIcon from "../assets/googleMaps.svg";
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
import Phone from "../assets/phone.svg";

interface ActionConfig {
  label: string;
  icon: string;
  color: string;
  size: number;
  iconVariant: "light" | "dark";
  buildHref?: (value: string) => string;
}

export const ACTION_MAP: Record<string, ActionConfig> = {
  whatsapp: {
    label: "WhatsApp",
    icon: WhatsAppIcon,
    color: "#25D366",
    iconVariant: "light",
    size: 24,
    buildHref: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
  },
  googleMaps: {
    label: "Google Maps",
    icon: GoogleMapsIcon,
    color: "#fff",
    iconVariant: "light",
    size: 28,
    buildHref: (v) => `https://maps.app.goo.gl/${v}`,
  },
  phone: {
    label: "Phone",
    icon: Phone,
    color: "#000000",
    iconVariant: "light",
    size: 24,
    buildHref: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
  },
  gmail: {
    label: "Gmail",
    icon: GmailIcon,
    color: "#fff",
    iconVariant: "light",
    size: 28,
    buildHref: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
  },
  instagram: {
    label: "Instagram",
    icon: InstagramIcon,
    color: "#E4405F",
    iconVariant: "light",
    size: 32,
  },
  facebook: {
    label: "Facebook",
    icon: FacebookIcon,
    color: "#1877F2",
    iconVariant: "light",
    size: 28,
  },
  x: {
    label: "X",
    icon: XIcon,
    color: "#fff",
    iconVariant: "light",
    size: 30,
  },
  linkedin: {
    label: "LinkedIn",
    icon: LinkedInIcon,
    color: "#0A66C2",
    iconVariant: "light",
    size: 24,
  },
  github: {
    label: "GitHub",
    icon: GithubIcon,
    color: "#181717",
    iconVariant: "light",
    size: 24,
  },
  youtube: {
    label: "YouTube",
    icon: YouTubeIcon,
    color: "#fff",
    iconVariant: "light",
    size: 28,
  },
  discord: {
    label: "Discord",
    icon: DiscordIcon,
    color: "#5865F2",
    iconVariant: "light",
    size: 24,
  },
  pinterest: {
    label: "Pinterest",
    icon: PinterestIcon,
    color: "#E60023",
    iconVariant: "light",
    size: 24,
  },
  reddit: {
    label: "Reddit",
    icon: RedditIcon,
    color: "white",
    iconVariant: "light",
    size: 34,
  },
  snapchat: {
    label: "Snapchat",
    icon: SnapchatIcon,
    color: "#FFFC00",
    iconVariant: "dark",
    size: 28,
  },
  telegram: {
    label: "Telegram",
    icon: TelegramIcon,
    color: "#0088CC",
    iconVariant: "light",
    size: 28,
  },
  tiktok: {
    label: "TikTok",
    icon: TikTokIcon,
    color: "#010101",
    iconVariant: "light",
    size: 24,
  },
  twitch: {
    label: "Twitch",
    icon: TwitchIcon,
    color: "#9146FF",
    iconVariant: "light",
    size: 24,
  },
};
