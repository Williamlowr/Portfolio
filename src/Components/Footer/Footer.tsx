import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t border-gray-700 bg-gray-900/70 brightness-110 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          {/* Footer Logo or Title */}
          <div>
            <p className="text-xl font-bold">
              William Lowrimore
            </p>
            <p className="text-sm text-gray-400">
              Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3.5 mt-4 md:mt-0">
            <a
              href="https://github.com/Williamlowr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/william-lowrimore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <GrLinkedin size={24} />
            </a>
            <a
              href="mailto:LowrWilliam@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <MdEmail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-3 pt-2 text-right text-sm text-gray-400">
          © {new Date().getFullYear()} William Lowrimore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}