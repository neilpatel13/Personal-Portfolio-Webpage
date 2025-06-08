
const projects = [
    {
        id: 1,
        title: "Project One",
        description: "This is a description of project one.",
        image: "/projects/p1.png",
        tags: ["tag1", "tag2", "tag3"],
        demoUrl: "#",
        GithubUrl: "#"
    },

    {
        id: 2,
        title: "Project 2",
        description: "This is a description of project 2.",
        image: "/projects/p2.png",
        tags: ["tag1", "tag2", "tag3"],
        demoUrl: "#",
        GithubUrl: "#"
    },

    {
        id: 3,
        title: "Project 3",
        description: "This is a description of project 3.",
        image: "/projects/p3.png",
        tags: ["tag1", "tag2", "tag3"],
        demoUrl: "#",
        GithubUrl: "#"
    }
]

export const ProjectsSections = () => {

    return <section id="projects" className="py-24 px-4 relative"> 
        <div className="container mx-auto max-width-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity. 
                Click on the links to view the live demos or source code.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"> 
                        <div className="h-48 overflow-hidden">
                            <img />
                        </div>
                    </div>
                ))}

            </div>


        </div>
    </section>
};