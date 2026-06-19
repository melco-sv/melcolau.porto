"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Check, Mail } from "@/components/ui/icons";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { profile } from "@/lib/content";

/**
 * Email CTA that reliably "works" regardless of whether the visitor has a
 * desktop mail client: it copies the address to the clipboard and shows
 * confirmation. (mailto: silently fails for many webmail-only users.)
 */
export function EmailButton() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const email = profile.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback for browsers / contexts without the async clipboard API.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MagneticButton
      onClick={handleCopy}
      variant="primary"
      strength={0.5}
      ariaLabel={`${t.contact_email}: ${profile.email}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : "idle"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-2"
        >
          {copied ? <Check className="text-base" /> : <Mail className="text-base" />}
          {copied ? t.email_copied : t.contact_email}
        </motion.span>
      </AnimatePresence>
    </MagneticButton>
  );
}
