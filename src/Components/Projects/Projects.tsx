// import ProjectCard from "./ProjectCard";

export default function Projects() {
  // const projects = [
  //   {
  //     title: "Project 1",
  //     description: "Description of Project 1",
  //     imageUrl: "project1-image-url.jpg",
  //     projectUrl: "project1-url",
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Description of Project 2",
  //     imageUrl: "project2-image-url.jpg",
  //     projectUrl: "project2-url",
  //   },
  //   // Add more projects as needed
  // ];

  return (
    <div className="">
      <div className="py-12 px-4 md:px-12 ">
        <h2 className="text-4xl font-bold text-white mb-6 text-center ">My Projects</h2>
        <p className="text-xl text-white mb-6 text-center">
          Currently wiring projects to my site, but make sure to check my GitHub for my respositories in the meantime </p>
        <div className="flex justify-center">
          <a
            href="https://github.com/Williamlowr"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
        </div>
        {/* <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
