"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { profile } from "@/lib/content";
import { ArrowUpRight, Github, Linkedin, Mail } from "@/components/ui/icons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: profile.github, Icon: Github },
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <footer className="relative border-t border-line/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">
            Melco Lauwento<span className="text-gradient">.</span>
          </p>
          <p className="text-muted mt-1 max-w-sm text-sm">{t.footer_built}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-cursor
              className="glass hover:text-ink hover:bg-fg group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors"
            >
              <Icon className="text-base" />
              {label}
              <ArrowUpRight className="text-faint group-hover:text-ink text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="text-faint mx-auto mt-10 flex max-w-6xl flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} Melco Lauwento. {t.footer_rights}
        </span>
        <span>Bandung, Indonesia · {profile.githubHandle}</span>
      </div>
    </footer>
  );
}
