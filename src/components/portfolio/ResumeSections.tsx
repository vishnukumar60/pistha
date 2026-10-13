import {
  GraduationCap,
  ArrowUpRight,
  Coffee,
  CodeXml,
  Database,
  ChartNoAxesColumnIncreasing,
  Braces,
  BrainCircuit,
  MapPin,
  CalendarDays,
  Check,
  Trophy,
  Medal,
  Languages as LanguagesIcon,
  Globe,
  Network,
  Cpu,
  Lightbulb,
  Users,
  Clock,
  RefreshCw,
  BadgeCheck,
} from "lucide-react";
import {
  education,
  skills,
  internship,
  certifications,
  softSkills,
  languages,
} from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell section-space about-grid">
      <div>
        <SectionHeading number="01" eyebrow="THE PERSON BEHIND THE PROJECTS" title="About Me" />
        <div className="editorial-copy">
          <p>Curiosity is where it all starts.</p>
          <p>
            I'm an Artificial Intelligence and Data Science engineering student with a strong
            interest in <strong>AI, machine learning, and data analytics.</strong>
          </p>
          <p>
            My goal is to build impactful, innovative AI solutions that make a meaningful
            difference. Along the way, I'm always looking for opportunities to learn, share ideas,
            and collaborate.
          </p>
        </div>
        <a href="#contact" className="text-link">
          Let’s build something meaningful <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="education-list">
        <div className="small-heading">
          <GraduationCap size={19} /> MY EDUCATION
        </div>
        {education.map((item) => (
          <article className="education-item" key={item.degree}>
            <div className="education-top">
              <span className="inset-label">{item.date}</span>
              <span className="education-result">
                {item.result}
                <small>{item.label}</small>
              </span>
            </div>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const skillIcons = {
  java: Coffee,
  html: CodeXml,
  css: Braces,
  sql: Database,
  powerbi: ChartNoAxesColumnIncreasing,
};
export function Skills() {
  return (
    <section id="skills" className="section-shell section-space">
      <SectionHeading
        number="02"
        eyebrow="MY TECHNICAL TOOLKIT"
        title="Skills & Technologies"
        description="The tools I use to turn a problem into a possibility."
      />
      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.symbol as keyof typeof skillIcons];
          return (
            <article className={`skill-tile raised-surface skill-${skill.symbol}`} key={skill.name}>
              <span className="skill-icon">
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-shell section-space experience-grid">
      <SectionHeading
        number="04"
        eyebrow="LEARNING IN THE REAL WORLD"
        title="Experience"
        description="Hands-on exploration. Practical learning. A stronger foundation."
      />
      <article className="experience-panel">
        <div className="experience-heading">
          <span className="experience-icon">
            <BrainCircuit size={25} />
          </span>
          <div>
            <span className="eyebrow">INTERNSHIP</span>
            <h3>{internship.title}</h3>
            <p>{internship.company}</p>
          </div>
        </div>
        <div className="experience-meta">
          <span>
            <MapPin size={14} />
            {internship.location}
          </span>
          <span>
            <CalendarDays size={14} />
            {internship.date}
          </span>
        </div>
        <ul className="check-list">
          {internship.responsibilities.map((item) => (
            <li key={item}>
              <Check size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-shell section-space">
      <SectionHeading
        number="05"
        eyebrow="MILESTONES THAT MATTER"
        title="Achievements"
        description="A few moments of recognition. Plenty of motivation to keep going."
      />
      <div className="awards-grid">
        <article className="award-tile award-first">
          <span className="award-icon">
            <Trophy size={32} strokeWidth={1.5} />
          </span>
          <div>
            <span className="award-place">
              01 <small>FIRST PLACE</small>
            </span>
            <h3>AI-Powered Plant Identification and Disease Classification System</h3>
          </div>
          <Trophy className="award-watermark" />
        </article>
        <article className="award-tile award-second">
          <span className="award-icon">
            <Medal size={32} strokeWidth={1.5} />
          </span>
          <div>
            <span className="award-place">
              02 <small>SECOND PLACE</small>
            </span>
            <h3>Visual Drawing and Hand Tracking System</h3>
          </div>
          <Medal className="award-watermark" />
        </article>
      </div>
      <div className="achievement-details">
        <div>
          <LanguagesIcon />
          <p>
            <strong>Japanese language milestones</strong>
            <span>Completed N5 and N4 Japanese Proficiency Language Test (JLPT).</span>
          </p>
        </div>
        <div>
          <Globe />
          <p>
            <strong>Hackathon participation</strong>
            <span>VIT Chennai · SMVEC, Pondicherry</span>
            <span>Participated in a hackathon at VIT Chennai and hackathons at SMVEC.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const credentialIcons = {
  network: Network,
  database: Database,
  cpu: Cpu,
  code: CodeXml,
  brain: BrainCircuit,
  chart: ChartNoAxesColumnIncreasing,
};
export function Certifications() {
  return (
    <section id="certifications" className="section-shell section-space">
      <SectionHeading
        number="06"
        eyebrow="ALWAYS A STUDENT"
        title="Certifications"
        description="Expanding my perspective, one learning experience at a time."
      />
      <div className="certifications-grid">
        {certifications.map((cert, i) => {
          const Icon = credentialIcons[cert.icon as keyof typeof credentialIcons];
          return (
            <article className={`credential raised-surface credential-${i}`} key={cert.name}>
              <span className="credential-icon">
                <Icon size={24} strokeWidth={1.6} />
              </span>
              <div>
                <p>{cert.provider}</p>
                <h3>{cert.name}</h3>
              </div>
              <BadgeCheck className="credential-check" size={18} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function PersonalSkills() {
  const icons = [Lightbulb, Users, Clock, RefreshCw];
  return (
    <section className="section-shell section-space personal-grid">
      <div>
        <SectionHeading number="07" eyebrow="BEYOND THE TECHNICAL" title="How I Work" />
        <div className="soft-skills-grid">
          {softSkills.map((skill, i) => {
            const Icon = icons[i] ?? Lightbulb;
            return (
              <div className="soft-skill" key={skill}>
                <Icon size={20} />
                <span>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="languages-section">
        <div className="eyebrow">
          <LanguagesIcon size={17} /> CONNECTING ACROSS CULTURES
        </div>
        <h2>Languages</h2>
        <div className="language-list">
          {languages.map((language) => (
            <span
              className={
                language.startsWith("Japanese") ? "language-label japanese" : "language-label"
              }
              key={language}
            >
              {language}
              {language.startsWith("Japanese") && <span lang="ja">日本語</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
