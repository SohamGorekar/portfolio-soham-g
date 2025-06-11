import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 65, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 20, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 0, category: "frontend" },

  // Backend
  { name: "Node.js", level: 20, category: "backend" },
  { name: "Express", level: 40, category: "backend" },
  { name: "MongoDB", level: 0, category: "backend" },
  { name: "PostgreSQL", level: 50, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 0, category: "tools" },
  { name: "Figma", level: 0, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <>
    <Navbar />
    <ThemeToggle />
    <StarBackground />
    <main className="min-h-screen py-12 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border border-border"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add some decorative elements if you want */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
    </main>
    </>
  );
}