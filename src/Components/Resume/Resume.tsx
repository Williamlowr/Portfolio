import resume from "../../assets/ResumeRecent.pdf";
import profilepicture from "../../assets/profilepicture.jpg";

export default function ResumeDownloadPage(): JSX.Element {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      {/* Introduction and Summary */}
      <div className="text-center mb-6">
      <img
              src={profilepicture}
              alt="picture"
              className="w-18 h-18 rounded-full mx-auto"
              style={{ backgroundImage: "url('profile-picture.jpg')", maxWidth: "120px" }}
            />
        <h1 className="text-3xl text-white mt-2">Frontend Developer</h1>
        <p className="mt-4 text-white max-w-md mx-auto">
          I am specializing in creating visually appealing and user-friendly
          websites/applications. My expertise lies in HTML, CSS, JavaScript, and especially modern
          frameworks like React.
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