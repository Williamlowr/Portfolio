export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Footer Logo or Title */}
          <div>
            <a href="/" className="text-xl font-bold">
              William Lowrimore
            </a>
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center">
            <a
              href="/about"
              className="text-sm text-gray-300 hover:text-gray-400 mx-2"
            >
              About
            </a>
            <a
              href="/projects"
              className="text-sm text-gray-300 hover:text-gray-400 mx-2"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-300 hover:text-gray-400 mx-2"
            >
              Contact
            </a>
          </div>

          {/* Social Links or Additional Info */}
          <div className="text-sm text-gray-300 mt-4 md:mt-0">
            © 2024 William Lowrimore. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
