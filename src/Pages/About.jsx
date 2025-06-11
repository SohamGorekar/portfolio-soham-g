import { Briefcase, Code, User } from "lucide-react";
import { Navbar } from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";

const About = () => {
  return (
    <>
    <ThemeToggle />
    <Navbar />
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <div className="meteor" style={{
            top: "10%",
            left: "80%",
            width: "300px",
            height: "1px",
            animation: "var(--animate-meteor)",
          }} />
        </div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer creating digital experiences that matter
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">
                My Journey in Tech
              </h2>

              <p className="text-muted-foreground">
                With over 1 year of experience in web development, I specialize
                in creating responsive, accessible, and performant web
                applications using modern technologies.
              </p>

              <p className="text-muted-foreground">
                My journey began when I discovered my passion for problem-solving
                through code. Since then, I've dedicated myself to mastering the
                craft of web development, constantly pushing my boundaries to
                create better solutions.
              </p>

              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or mentoring aspiring
                developers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>

                <a
                  href="#"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Web Development</h3>
                    <p className="text-muted-foreground">
                      Building responsive websites and web applications with
                      React, Next.js, and modern frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">UI/UX Design</h3>
                    <p className="text-muted-foreground">
                      Crafting intuitive interfaces with attention to detail and
                      user experience principles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">Project Management</h3>
                    <p className="text-muted-foreground">
                      Leading projects from concept to deployment using agile
                      methodologies and collaborative tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "Figma",
              "Agile Methodologies",
            ].map((skill) => (
              <div
                key={skill}
                className="gradient-border p-4 text-center card-hover"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;