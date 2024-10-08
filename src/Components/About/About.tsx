export default function About() {
  return (
    <div className="">
      {/* Introduction Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-700">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-xl text-white">
          Hello, I'm William Lowrimore, a computer science student based in Tyler, Texas. Right now, I especially enjoy 
          creating interactive web applications, though my interests and niche are still being fully explored.

          This site was made using React and Tailwind featuring reusable components, a clean file structure, and an easily expandable/customizable codebase.
        </p>
        {/* Add more personal details or a story here */}
      </div>

      {/* Skills or Experience Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-800">
        <h3 className="text-3xl font-bold text-white mb-4">
          Skills & Experience
        </h3>
        <p className="text-xl text-white">
          With a background in insurance adjusting, as well as 
          a degree in CS and certificate in Data Science, I feel I bring a lot of
          unique skills to the table. My projects range
          from websites to Java servers to WebGL and more.
        </p>
        {/* List more skills or experiences here */}
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 md:px-12 bg-gray-700">
        <h4 className="text-3xl font-bold text-white mb-4">Contact Me</h4>
        <p className="text-xl text-white mb-4">
          Interested in working together? I'd love to hear from you! You can reach me via email below, or feel free to connect on LinkedIn.
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
        {/* Add more contact options if necessary */}
      </div>
    </div>
  );
}