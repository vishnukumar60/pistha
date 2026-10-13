import { useRef, type PointerEvent } from "react";
import {
  ArrowUpRight,
  ScanLine,
  Leaf,
  Trophy,
  UserRound,
  Check,
  Upload,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ProjectVisual({ botanical }: { botanical: boolean }) {
  return (
    <div
      className={`project-visual ${botanical ? "botanical" : "surveillance"}`}
      aria-label={
        botanical
          ? "Concept illustration of plant image analysis, not an application screenshot"
          : "Concept illustration of computer vision surveillance, not an application screenshot"
      }
      role="img"
    >
      <span className="visual-note">PROJECT VISUALIZATION</span>
      {botanical ? (
        <>
          <div className="plant-illustration">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <path className="plant-stem" d="M100 184 Q100 122 112 45" />
              <path
                className="plant-leaf leaf-one"
                d="M106 98 C53 102 41 56 43 33 C82 32 110 48 106 98Z"
              />
              <path
                className="plant-leaf leaf-two"
                d="M103 137 C133 81 173 91 178 70 C185 121 155 151 103 137Z"
              />
              <path
                className="plant-leaf leaf-three"
                d="M112 64 C101 32 125 15 144 10 C156 43 137 58 112 64Z"
              />
              <path className="leaf-vein" d="M47 38L106 98M174 76L103 137M143 15L112 64" />
            </svg>
            <div className="scan-corner tl" />
            <div className="scan-corner tr" />
            <div className="scan-corner bl" />
            <div className="scan-corner br" />
          </div>
          <div className="analysis-chip">
            <Leaf size={16} />
            <span>Plant image analysis</span>
            <Check size={14} />
          </div>
          <div className="upload-chip">
            <Upload size={16} />
            <span>Image input</span>
          </div>
        </>
      ) : (
        <>
          <div className="vision-scene">
            <div className="scene-wall" />
            <div className="scene-floor" />
            <div className="scene-box box-one" />
            <div className="scene-box box-two" />
            <div className="scene-person">
              <div />
              <span />
            </div>
            <div className="detection-frame">
              <span>ACTIVITY DETECTION</span>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="monitor-chip">
            <CircleDot size={15} />
            <span>Real-time monitoring</span>
            <div className="waveform">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <ScanLine className="vision-icon" size={28} />
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);
  function tilt(e: PointerEvent<HTMLElement>) {
    if (
      e.pointerType !== "mouse" ||
      !window.matchMedia("(prefers-reduced-motion: no-preference) and (hover: hover)").matches
    )
      return;
    const bounds = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--tilt-x",
      `${(-(e.clientY - bounds.top - bounds.height / 2) / bounds.height) * 3}deg`,
    );
    e.currentTarget.style.setProperty(
      "--tilt-y",
      `${((e.clientX - bounds.left - bounds.width / 2) / bounds.width) * 3}deg`,
    );
  }
  function reset() {
    ref.current?.style.setProperty("--tilt-x", "0deg");
    ref.current?.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <article
      ref={ref}
      className="project-card raised-surface"
      onPointerMove={tilt}
      onPointerLeave={reset}
    >
      <ProjectVisual botanical={project.id === "plants"} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-number">/{project.number}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-bottom">
          <span className="role-label">
            <UserRound size={14} />
            {project.role}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="project-details"
                aria-label={`View details: ${project.title}`}
              >
                View project <ArrowUpRight />
              </Button>
            </DialogTrigger>
            <DialogContent className="project-modal">
              <div className="eyebrow">PROJECT {project.number}</div>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>
                {project.category} · {project.role}
              </DialogDescription>
              <div className="project-modal-content">
                <h4>The problem</h4>
                <p>{project.problem}</p>
                <h4>The solution</h4>
                <p>{project.solution}</p>
                <h4>My contribution · {project.role}</h4>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {project.id === "plants" && (
        <div className="project-award">
          <Trophy size={13} /> First Place
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-shell section-space">
      <SectionHeading
        number="03"
        eyebrow="IDEAS, BROUGHT TO LIFE"
        title="Selected Projects"
        description="Turning real-world challenges into thoughtful, AI-powered solutions."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
