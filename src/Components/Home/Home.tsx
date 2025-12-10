import FAQItem from "./FAQItem";
import SkillBar from "./SkillBar";
import TimelineItem from "./TimelineItem";
import profilePicture from "../../assets/profilepicture.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="h-screen flex items-start justify-center pt-[184px]">
        <div className="text-center">
          <div className="mb-2">
            {/* Profile Picture */}
            <img
              src={profilePicture}
              alt="picture"
              className="w-22 h-22 rounded-full mx-auto"
              style={{
                backgroundImage: "url('profile-picture.jpg')",
                maxWidth: "160px",
              }}
            />
          </div>
          {/* Name and Intro */}
          <h1 className=" font-bold text-white text-6xl">William Lowrimore</h1>
          <p className="mt-3 text-xl text-gray-200 max-w-xl mx-auto">
            Full-Stack Software Engineer • React, TypeScript, Node.js, Python
          </p>
          <p className="mt-1 text-lg text-gray-200 max-w-xl mx-auto">
            Building Modern Web Apps and Dashboards
          </p>
          <a
            href="#learn-more"
            className="mt-5 inline-block hover:bg-white bg-black hover:text-black text-white font-bold py-3 px-6 rounded-full text-md transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
      {/* Jump to here */}
      <div className="py-12" id="learn-more">
        <div className="max-w-8xl mx-auto px-2 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            What to Expect from This Site
          </h2>
          <p className="text-white text-lg mb-6">
            A guide to understanding this portfolio:
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Showcased Features
                </h3>
                <p className="text-gray-800">
                  I understand if this site has some features seem implemented
                  just to show that I could; that's certainly the idea. This is meant to show that I can help
                  implement any features you need to make your project come to
                  life exactly as you envisioned.
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Subjective Design Choices
                </h3>
                <p className="text-gray-800">
                  This site may not align with your personal design preferences;
                  I encourage you to visit this section of the site (WIP) to
                  explore your own design preferences applied to my portfolio to
                  demonstrate my ability to adapt to different design styles.
                </p>
              </div>
            </div>
            <div className="transform hover:scale-105 transition duration-500 ease-in-out">
              <div className="p-6 shadow-lg rounded-lg bg-gray-50">
                <h3 className="text-2xl text-gray-800 font-semibold mb-3">
                  Projects Section
                </h3>
                <p className="text-gray-800">
                  <a href="/projects" className="text-indigo-900 underline font-bold">The projects tab</a> is a constant work in progress, but here you can expect
                  to see a growing catalogue that includes anything from fun
                  demonstrations, commissioned projects, and a few mini
                  showcases that show my understanding of CS fundamentals.
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
                position="left"
                connect="right"
              />
              <TimelineItem
                title="Began Web Dev"
                description="Started learning React/TailwindCSS"
                date="2022"
                position="right"
                connect="left"
              />
              <TimelineItem
                title="Created Personal Site"
                description="Created my portfolio site; began adding past/current projects"
                date="2023"
                position="left"
                connect="right"
              />
              <TimelineItem
                title="Internship/Graduation"
                description="Began internship in May; Graduated in Dec"
                date="2025"
                position="right"
                connect="left"
              />
              <TimelineItem
                title="2026 and Beyond"
                description="Seeking full-stack opportunities to grow as an engineer"
                date="2026"
                position="left"
                connect={null}
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
            <SkillBar skill={"React"} level={94} />
            <SkillBar skill={"TypeScript"} level={88} />
            <SkillBar skill={"Git / Version Control"} level={85} />
            <SkillBar skill={"Node.js"} level={84} />
            <SkillBar skill={"Python"} level={80} />
            <SkillBar skill={"Java"} level={76} />
            <SkillBar skill={"HTML / CSS"} level={75} />
            <SkillBar skill={"PostgreSQL"} level={70} />
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
