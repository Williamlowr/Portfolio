import resume from "../../assets/William_Lowrimore_Resume.pdf";
import profilepicture from "../../assets/profilepicture.jpg";

export default function ResumeDownloadPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-start pt-[184px]">
      {/* Introduction and Summary */}
      <div className="text-center mb-6">
      <img
              src={profilepicture}
              alt="picture"
              className="w-18 h-18 rounded-full mx-auto"
              style={{ maxWidth: "160px" }}
            />
        <h1 className="text-3xl text-white mt-2">Full-stack Engineer</h1>
        <p className="mt-4 text-white max-w-lg mx-auto">
          Full-stack software engineer building production-ready web apps with React, TypeScript, Node.js, PostgreSQL, and Python.
        </p>
      </div>

      {/* Download Button */}
      <a
        href={resume}
        download="William_Lowrimore_Resume.pdf"
        className="hover:bg-white bg-black hover:text-black text-white font-bold py-2 px-4 rounded-full"
      >
        Download Resume
      </a>
    </div>
  );
}