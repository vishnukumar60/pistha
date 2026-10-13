import { ArrowDown, ArrowUpRight, GraduationCap, Trophy, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/praveen.webp";

export function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <span className="status-dot" /> A curious mind. An AI-driven future.
          </div>
          <h1>
            PRAVEEN{" "}
            <span>
              M<span className="name-dot">.</span>
            </span>
          </h1>
          <h2>
            Artificial Intelligence &<br />
            <span>Data Science Engineer</span>
          </h2>
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-buttons">
            <Button asChild size="lg">
              <a href="#projects">
                Explore My Projects <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="surface" size="lg">
              <a href="#contact">
                Contact Me <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Praveen on GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Praveen on LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <span className="social-rule" />
            <span className="hero-location">Learning. Building. Evolving.</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-grid" />
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Portrait of Praveen M"
              width={1086}
              height={1448}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      <div className="hero-highlights">
        <div>
          <span className="highlight-icon">
            <GraduationCap />
          </span>
          <p>
            <strong>B.Tech · AI & Data Science</strong>
            <span>2023–2027</span>
          </p>
        </div>
        <div>
          <span className="highlight-metric">8.92</span>
          <p>
            <strong>Academic CGPA</strong>
            <span>Learning with purpose</span>
          </p>
        </div>
        <div>
          <span className="highlight-icon orange">
            <Trophy />
          </span>
          <p>
            <strong>First Place</strong>
            <span>AI-Powered Plant Identification & Disease Classification</span>
          </p>
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        <ArrowDown size={14} /> A LITTLE MORE ABOUT ME
      </a>
    </section>
  );
}
