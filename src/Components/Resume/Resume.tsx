import resume from "../../assets/ResumeLowrimore.pdf";
import profilepicture from "../../assets/profilepicture.jpg";

export default function ResumeDownloadPage(): JSX.Element {
  return (
    <div className=" h-screen flex flex-col items-center justify-center pb-[350px]">
      {/* Introduction and Summary */}
      <div className="text-center mb-6">
      <img
              src={profilepicture}
              alt="picture"
              className="w-18 h-18 rounded-full mx-auto"
              style={{ backgroundImage: "url('profile-picture.jpg')", maxWidth: "160px" }}
            />
        <h1 className="text-3xl text-white mt-2">Fullstack Developer</h1>
        <p className="mt-4 text-white max-w-lg mx-auto">
          I specializing in creating visually appealing and user-friendly
          websites/applications. My expertise lies in modern
          frameworks like React, fast styling with Tailwind, and data management with Python. 
        </p>
      </div>

      {/* Download Button */}
      <a
        href={resume}
        download="WilliamLowrimore_Resume.pdf"
        className="hover:bg-white bg-black hover:text-black text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </div>
  );
}