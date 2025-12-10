import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoDocumentAttachOutline,
  IoBriefcaseOutline,
  IoBriefcase,
  IoDocumentAttach,
  IoHomeOutline,
  IoHomeSharp,
} from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

// Menu items with icons
const menuItems = [
  { name: "Home", path: "/", icon: [<IoHomeOutline />, <IoHomeSharp />] },
  {
    name: "Projects",
    path: "/projects",
    icon: [<IoBriefcaseOutline />, <IoBriefcase />],
  },
  {
    name: "Repo",
    path: "https://github.com/Williamlowr/Portfolio",
    icon: [<FiGithub />],
  },
  {
    name: "Resume",
    path: "/resume",
    icon: [<IoDocumentAttachOutline />, <IoDocumentAttach />],
  },
];



export default function Navbar() {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY;

      if (current > lastScroll && current > 700) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className={`navbar sticky z-50 top-0 brightness-125 bg-gradient-to-r from-error via-primary to-error h-12 flex justify-center shadow-[0px_2px_3px_rgba(20,20,20,.8)] transition-all duration-250 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100" }`}>      
    <div className="w-[52vw]">
        {/* Logo, Left Side */}
        <Link to="/" className="text-4xl font-bold text-neutral flex-1 drop-shadow-[2px_4px_3px_rgba(0,0,0,.9)]">
          WL.
        </Link>
        {/* Menu Items, Right Side */}
        <div className="flex">
          {menuItems.map((item, index) => {
            const isExternal = item.name === "Repo";

            const content = (
              <>
                {/* Animated Bar Underline */}
                <section className="flex items-center before:shadow-[2px_3px_4px_rgba(0,0,0,.7)] before:rounded-xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-[375ms] before:scale-x-0 before:bg-accent before:absolute before:-bottom-[3px]">
                  {/* Tab Icon Styling (if selected) */}
                  <div
                    className={`text-xl text-neutral pr-1.5  ${
                      item.path === location.pathname
                        ? "opacity-100 drop-shadow-[0_0_10px_rgba(240,240,240,0.12)]"
                        : "opacity-60 drop-shadow-[2px_4px_2px_rgba(0,0,0,.9)]"
                    }`}
                  >
                    {/* Show filled icon only when selected */}
                    {item.icon[item.path === location.pathname ? 1 : 0]}
                  </div>
                  {/* Tab Name Styling (if selected) */}
                  <div
                    className={`text-xl font-sans font-semibold text-neutral ${
                      item.path === location.pathname
                        ? "opacity-100 drop-shadow-[0_0_10px_rgba(230,230,230,0.12)]"
                        : "opacity-60 drop-shadow-[2px_4px_2px_rgba(0,0,0,.9)]"
                    }`}
                  >
                    {item.name}
                  </div>
                </section>
                {/* Separator lines */}
                {index !== menuItems.length - 1 && (
                  <div className="flex items-center pl-3">
                    <div className="inline-block rounded-xl h-[25px] w-[3px] bg-accent shadow-[2px_3px_4px_rgba(0,0,0,.7)]"></div>
                  </div>
                )}
              </>
            );

            return (
              <div key={index} className="flex pl-3">
                {isExternal ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="flex">
                    {content}
                  </a>
                ) : (
                  <Link to={item.path} className="flex">
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

