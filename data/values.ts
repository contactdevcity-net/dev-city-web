import {
  Users,
  Cpu,
  Layers,
  Heart,
  MessageSquare,
  ShieldCheck,
  Handshake,
  TrendingUp,
} from "lucide-react";
import type { ValueProp } from "@/types";

export const valueProps: ValueProp[] = [
  { title: "Experienced Engineering", description: "Senior engineers who've shipped production systems at scale, not a rotating bench of juniors.", icon: Users },
  { title: "Modern Technology", description: "We build on proven, modern stacks — never legacy tools just because they're familiar.", icon: Cpu },
  { title: "Scalable Architecture", description: "Every system is designed to handle your next stage of growth, not just today's requirements.", icon: Layers },
  { title: "User-Centered Design", description: "Research and testing drive every design decision — not internal opinion.", icon: Heart },
  { title: "Transparent Communication", description: "Clear timelines, honest tradeoffs, and direct access to the team building your product.", icon: MessageSquare },
  { title: "Reliable Delivery", description: "We scope realistically and ship on the timelines we commit to.", icon: TrendingUp },
  { title: "Security First", description: "Security and data protection are built in from architecture, not patched on after launch.", icon: ShieldCheck },
  { title: "Long-Term Partnership", description: "Most of our clients work with us for years, not just a single project.", icon: Handshake },
];
