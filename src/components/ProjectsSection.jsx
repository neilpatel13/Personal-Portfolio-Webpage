import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Banking App",
    description: "A robust banking app for user-friendly banking tasks of Depositing, Withdrawing, and Transferring funds",
    image: "/projects/PI1.png",
    tags: ["Python", "CSS", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/neilpatel13/Banking-Application",
  },
  {
    id: 2,
    title: "Focus Time App",
    description:
      "Full-featured Pomodoro timer app with task management and analytics.",
    image: "/projects/PI2.png",
    tags: ["JavaScript", "Google API", "Firebase", "MaterialUI", "Jira", "Jest [Testing]"],
    demoUrl: "#",
    githubUrl: "https://github.com/neilpatel13/CS490-Project",
  },
  {
    id: 3,
    title: "LoudenNet",
    description:
      "A full-stack web app integrating YouTube and LinkedIn APIs forcross-platform content analytics.",
    image: "/projects/PI3.png",
    tags: ["HTML", "CSS", "JavaScript" , "Node.js", "Express", "MySQL"],
    demoUrl: "https://loudennet.com/",
    githubUrl: "https://github.com/Willlouden-com-Inc/loudennet/tree/finalsave",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>
                <div>
                  <div className="flex justify-center items-center space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/neilpatel13"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}; //project section completed, video at 2.13.30