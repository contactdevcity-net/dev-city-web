import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "We start by understanding your business, users, and technical constraints — no assumptions carried in from a template." },
  { number: "02", title: "Strategy", description: "We define scope, architecture, and success metrics, so every stakeholder agrees on what we're building and why." },
  { number: "03", title: "Design", description: "We research, wireframe, and prototype the experience, testing with real users before development begins." },
  { number: "04", title: "Develop", description: "We build in short, reviewable sprints with continuous integration and regular stakeholder demos." },
  { number: "05", title: "Test", description: "We run automated and manual QA against real-world scenarios, not just happy paths." },
  { number: "06", title: "Launch", description: "We manage deployment, monitoring, and rollout so launch day is uneventful in the best way." },
  { number: "07", title: "Scale", description: "We monitor performance and usage post-launch, ready to iterate as your product and user base grow." },
];
