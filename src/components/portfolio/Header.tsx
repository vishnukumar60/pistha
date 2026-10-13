import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/data/portfolio";

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("praveen-theme") === "dark";
      setDark(saved);
      document.documentElement.classList.toggle("dark", saved);
    } catch {
      /* Light is the default when storage is unavailable. */
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach((name) => {
      const el = document.getElementById(name.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("praveen-theme", next ? "dark" : "light");
    } catch {
      /* Toggle still works without storage. */
    }
  }
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Praveen home">
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className={active === name.toLowerCase() ? "nav-link active" : "nav-link"}
              aria-current={active === name.toLowerCase() ? "location" : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button
            variant="surface"
            size="icon"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Light theme" : "Dark theme"}
          >
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="mobile-menu-button"
                variant="surface"
                size="icon"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-drawer">
              <SheetTitle>
                Praveen<span className="text-primary">.</span>
              </SheetTitle>
              <SheetDescription>Artificial Intelligence & Data Science</SheetDescription>
              <nav className="mobile-nav" aria-label="Mobile navigation">
                {navigation.map((name) => (
                  <a key={name} href={`#${name.toLowerCase()}`} onClick={() => setOpen(false)}>
                    {name}
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
