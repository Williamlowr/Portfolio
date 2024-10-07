import FAQItem from "./FAQItem";
import SkillBar from "./SkillBar";
import TimelineItem from "./TimelineItem";
import profilePicture from '../../assets/profilepicture.jpg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('your-hero-background.jpg')" }}
      >
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profilePicture}
              alt="picture"
              className="w-16 h-16 rounded-full mx-auto"
              style={{ backgroundImage: "url('profile-picture.jpg')", maxWidth: "160px" }}
            />
          </div>
          <h1 className="text-6xl font-bold text-white sm:text-8xl">
            Captivating Creativity
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            Crafting unique web experiences with modern design and technology.
          </p>
          <a
            href="#learn-more"
            className="mt-8 inline-block hover:bg-white bg-black hover:text-black text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Interactive Section */}
      <div className="py-12" id="learn-more">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Discover Innovation
          </h2>
          <p className="text-white text-lg mb-6">
            Explore cutting-edge web technologies and design trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Replace these placeholders with actual content or interactive elements */}
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Responsive Design
                </h3>
                <p className="text-gray-800">
                  Creating fluid and adaptable interfaces for a seamless user
                  experience on any device.
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Creative Coding
                </h3>
                <p className="text-gray-800">
                  Blending art and technology to build visually stunning and
                  interactive websites.
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Modern Technologies
                </h3>
                <p className="text-gray-800">
                  Utilizing the latest tools and frameworks to deliver
                  high-performance web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Section */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-7 text-center">
            My Journey
          </h2>
          <div className="flex justify-center">
            <div className="mb-12 w-3/5">
              <TimelineItem
                title="Started My Journey"
                description="Began my career in web development."
                date="2015"
                position="right"
              />
              <TimelineItem
                title="First Major Project"
                description="Developed a major project for a local business."
                date="2016"
                position="left"
              />
              <TimelineItem
                title="Professional Growth"
                description="Joined a renowned tech company and expanded my skills."
                date="2018"
                position="right"
              />
              <TimelineItem
                title="Current Endeavors"
                description="Working on innovative projects and exploring new technologies."
                date="2021"
                position="left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Skills Section */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            My Skills
          </h2>
          <div>
            <SkillBar skill={"React"} level={90} />
            <SkillBar skill={"HTML"} level={85} />
            <SkillBar skill={"JavaScript"} level={85} />
            <SkillBar skill={"CSS / Tailwind CSS"} level={82} />          
            
          </div>
        </div>
      </div>

      {/* Interactive FAQ Section */}
      <div className="py-12 flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="Do you know how to make interactive dropdown boxes?"
              answer="Yes!"
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-white"></div>
    </div>
  );
}
