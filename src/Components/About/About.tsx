export default function About() {
  return (
    <div className="">
      {/* Introduction Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-700/70">
        <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
        <p className="text-xl text-white">
          Hi there; I'm William Lowrimore, a computer science graduate currently
          based in Austin, Texas. Right now, my interests and niche are still
          being fully explored post graduation, but I continue to refine my
          direction.
        </p>
        <p className="text-xl text-white mt-2">
          This site was made using React and Tailwind and features reusable
          components, a clean file structure, and an easily
          expandable/customizable codebase that is viewable on Github here.
        </p>
      </div>

      {/* Skills/Experience Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-700/20">
        <h3 className="text-3xl font-bold text-white mb-2">
          Skills and Experience
        </h3>
        <p className="text-xl text-white">
          With a degree in CS, a range of projects in the field already, and
          extensive experience insurance adjusting during school, I'm confident I bring
          a lot of unique skills and experience to the table. Additionally, I prefer solving leetcode problems in Python to round out my programming skills beyond front-end development.
        </p>
        <p className="text-xl text-white mt-2">
          My projects range from this site, to a commissioned location-based web
          scraper made for a non-profit organization, to mini applets made as
          part of a small LLC I interned for, and beyond; please see the
          projects section to explore more.
        </p>
        {/* List more later */}
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-700/70">
        <h4 className="text-3xl font-bold text-white mb-2">Contact Me</h4>
        <p className="text-xl text-white">
          Interested in working together? I'd love to hear from you!
        </p>
        <p className="text-xl text-white mt-1 mb-5">
          You can reach me via email below, or feel free to connect on LinkedIn.
        </p>
        <a
          href="mailto:lowrwilliam@gmail.com"
          className="hover:bg-white bg-black hover:text-black text-white font-bold py-2 px-4 rounded"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/william-lowrimore/"
          className="hover:bg-white bg-black hover:text-black text-white font-bold py-2 ml-6 px-4 rounded"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
