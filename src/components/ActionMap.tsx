import { ReactNode } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

type ActionConfig = {
  label: string;
  icon: ReactNode;
  buildHref: (v: string) => string;
  target?: "_blank";
};

export const ACTION_MAP: Record<string, ActionConfig> = {
  whatsapp: {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    buildHref: (v) => `https://wa.me/${v.replace(/\D/g, "")}`,
    target: "_blank",
  },
  phone: {
    label: "Phone",
    icon: <FaPhone />,
    buildHref: (v) => `tel:${v}`,
  },
  email: {
    label: "Email",
    icon: <FaEnvelope />,
    buildHref: (v) => `mailto:${v}`,
  },
  instagram: {
    label: "Instagram",
    icon: <FaInstagram />,
    buildHref: (v) => `https://instagram.com/${v}`,
    target: "_blank",
  },
};
