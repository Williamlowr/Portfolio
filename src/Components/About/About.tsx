export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Introduction Section */}
      <div className="py-12 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-xl text-gray-600">
          Hello! I'm William Lowrimore, a passionate frontend developer based in Tyler, Texas. I love creating interactive and responsive web applications
          that provide an engaging user experience.
        </p>
        {/* Add more personal details or a story here */}
      </div>

      {/* Skills or Experience Section */}
      <div className="py-12 px-4 md:px-12 bg-white">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Skills & Experience
        </h3>
        <p className="text-xl text-gray-600">
          With a background in x, I have developed a strong
          skill set in x, y, and z. My projects range
          from simple websites to complex web applications.
        </p>
        {/* List more skills or experiences here */}
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 md:px-12">
        <h4 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h4>
        <p className="text-xl text-gray-600 mb-4">
          Interested in working together? I'd love to hear from you!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Email Me
        </a>
        {/* Add more contact options if necessary */}
      </div>
    </div>
  );
}