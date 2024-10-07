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
          <div className="mb-2">
            <img
              src={profilePicture}
              alt="picture"
              className="w-22 h-22 rounded-full mx-auto"
              style={{ backgroundImage: "url('profile-picture.jpg')", maxWidth: "160px" }}
            />
          </div>
          <h1 className="text-6xl font-bold text-white sm:text-8xl">
            William Lowrimore
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-lg mx-auto">
            Soon to graduate with a degree in Computer Science; looking to apply my skills to new projects/opportunities.
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
          <h2 className="text-4xl font-bold text-white mb-4">
            What I Offer
          </h2>
          <p className="text-white text-lg mb-6">
            Why you should consider me for your next project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Replace these placeholders with actual content or interactive elements */}
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Creative Perspective
                </h3>
                <p className="text-gray-800">
                  Whether it be looking at a problem under a new light, or trying to iron out final design details
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Valuable Experience
                </h3>
                <p className="text-gray-800">
                  Through my education and personal projects, I have been exposed to many facets of development
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Modern Design
                </h3>
                <p className="text-gray-800">
                  Utilizing the latest tools to deliver
                  high-performance applications; up-to-date with latest industry standards
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
                description="Changed my major to CS"
                date="2020"
                position="right"
              />
              <TimelineItem
                title="Began Web Dev"
                description="Started learning React/TailwindCSS"
                date="2022"
                position="left"
              />
              <TimelineItem
                title="Created Personal Site"
                description="Finally began accumulating my work into a portfolio"
                date="2024"
                position="right"
              />
              <TimelineItem
                title="2025 and Beyond"
                description="Begin first internship; graduate in Dec. 2025; enter the field"
                date="2025"
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
            <SkillBar skill={"React"} level={92} />
            <SkillBar skill={"HTML"} level={88} />
            <SkillBar skill={"JavaScript"} level={88} />
            <SkillBar skill={"CSS / Tailwind CSS"} level={85} />          
            <SkillBar skill={"Python"} level={77} />                 
            
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
      <div className="py-16 "></div>
    </div>
  );
}
