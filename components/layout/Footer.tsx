import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/data/navigation";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import { LinkedInIcon, XIcon, GitHubIcon, DribbbleIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socials = [
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SOCIAL_LINKS.x, label: "X (Twitter)", Icon: XIcon },
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: GitHubIcon },
  { href: SOCIAL_LINKS.dribbble, label: "Dribbble", Icon: DribbbleIcon },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
];

function FooterColumnDark({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#0b1329", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              DevCity designs and builds web, mobile, and AI-powered software for
              ambitious businesses.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary-light" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary-light" aria-hidden="true" />
                <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary-light" aria-hidden="true" />
                <span>
                  {COMPANY.addressLocality}, {COMPANY.addressRegion}
                </span>
              </li>
            </ul>
          </div>

          <FooterColumnDark title="Company" links={footerNav.company} />
          <FooterColumnDark title="Services" links={footerNav.services} />
          <FooterColumnDark title="Resources" links={footerNav.resources} />
          <FooterColumnDark title="Legal" links={footerNav.legal} />
        </div>

        <div
          className="mt-14 flex flex-col items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col items-center justify-between w-full gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
