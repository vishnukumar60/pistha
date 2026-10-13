import { useState } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUp,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, navigation } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  }
  return (
    <section id="contact" className="section-shell section-space contact-grid">
      <div>
        <SectionHeading
          number="08"
          eyebrow="GOOD THINGS START WITH A CONVERSATION"
          title="Let's Connect"
        />
        <p className="contact-intro">
          Have an idea, a learning opportunity, or a challenge worth exploring? I'd love to hear
          from you.
        </p>
        <span className="contact-signature">
          Praveen M<span>.</span>
        </span>
      </div>
      <div className="contact-panel raised-surface">
        <div className="contact-panel-heading">
          <span className="contact-send">
            <Send size={22} />
          </span>
          <div>
            <h3>Say hello.</h3>
            <p>Let’s turn ideas into possibilities.</p>
          </div>
        </div>
        <div className="email-row">
          <Mail size={19} />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Copy email address"
            title="Copy email address"
            onClick={copyEmail}
          >
            {copyStatus === "success" ? <Check /> : <Copy />}
          </Button>
        </div>
        <p className="copy-feedback" role="status">
          {copyStatus === "success"
            ? "Email address copied."
            : copyStatus === "error"
              ? "Could not copy. Please select the email address or use the email link."
              : ""}
        </p>
        <a className="phone-link" href="tel:+918072899133">
          <Phone size={18} />
          {profile.phone}
          <ArrowUpRight size={16} />
        </a>
        <div className="contact-socials">
          <Button asChild variant="surface">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin />
              LinkedIn
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="surface">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github />
              GitHub
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <a href="#home" className="footer-name">
            Praveen M<span>.</span>
            <small>Artificial Intelligence & Data Science</small>
          </a>
          <nav aria-label="Footer navigation">
            {navigation
              .filter((name) => ["About", "Projects", "Contact"].includes(name))
              .map((name) => (
                <a key={name} href={`#${name.toLowerCase()}`}>
                  {name}
                </a>
              ))}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
          </nav>
          <Button asChild variant="surface" size="icon">
            <a href="#home" aria-label="Back to top" title="Back to top">
              <ArrowUp />
            </a>
          </Button>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Praveen M. All rights reserved.</span>
          <span>Made with curiosity & a little creativity.</span>
        </div>
      </div>
    </footer>
  );
}
