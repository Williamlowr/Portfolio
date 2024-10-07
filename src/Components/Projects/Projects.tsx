import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "project1-image-url.jpg",
      projectUrl: "project1-url",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "project2-image-url.jpg",
      projectUrl: "project2-url",
    },
    // Add more projects as needed
  ];

  return (
    <div className="">
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
