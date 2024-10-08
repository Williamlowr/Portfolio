import ProjectCard from "./ProjectCard";
import sort from '../../assets/sort.png';
import server from '../../assets/server.png';
import tempSearch from '../../assets/temp-search.png';

export default function Projects() {
  const projects = [
    {
      title: "Java Server/Client",
      description: "A basic project I made showcasing knowledge and ability to create basic TCP servers in Java. ",
      imageUrl: server,
      projectUrl: "https://github.com/Williamlowr/client-server-java",
    },
    {
      title: "Sort Algorithms",
      description: "A collection of sort algorithms that includes insertion, bubble, selection, merge, quick, and heap sort.",
      imageUrl: sort,
      projectUrl: "https://github.com/Williamlowr/sort-algorithms",
    },
    {
      title: "City Temperature Search",
      description: "This is a java program that searches a huge linked dataset of city temperatures (and many other variables). Program can be configured with different search parameters similar to SQL.",
      imageUrl: tempSearch,
      projectUrl: "https://github.com/Williamlowr/city-temperature-search",
    },
    {
      title: "Sort Algorithms",
      description: "A collection of sort algorithms that includes insertion, bubble, selection, merge, quick, and heap sort.",
      imageUrl: sort,
      projectUrl: "https://github.com/Williamlowr/sort-algorithms",
    },
    // Add more projects as needed
  ];

  return (
    <div className="">
      <div className="py-12 px-4 md:px-12 ">
        <h2 className="text-4xl font-bold text-white mb-6 text-center ">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
