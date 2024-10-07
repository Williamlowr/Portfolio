import resume from "../../assets/ResumeRecent.pdf";

export default function ResumeDownloadPage(): JSX.Element {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      {/* Introduction and Summary */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white">William Lowrimore</h1>
        <p className="text-xl text-white mt-2">Frontend Developer</p>
        <p className="mt-4 text-white max-w-md mx-auto">
          I specialize in creating visually appealing and user-friendly
          websites. My expertise lies in HTML, CSS, JavaScript, and especially modern
          frameworks like React.
        </p>
      </div>

      {/* Download Button */}
      <a
        href={resume}
        download="WilliamLowrimore_Resume.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </div>
  );
}
