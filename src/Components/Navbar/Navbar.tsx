import { Link, useLocation } from "react-router-dom";
import {
  IoDocumentAttachOutline,
  IoBriefcaseOutline,
  IoBriefcase,
  IoDocumentAttach,
  IoHomeOutline,
  IoHomeSharp,
} from "react-icons/io5";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/", icon: [<IoHomeOutline />, <IoHomeSharp />] },
  {
    name: "Projects",
    path: "/projects",
    icon: [<IoBriefcaseOutline />, <IoBriefcase />],
  },
  {
    name: "About",
    path: "/about",
    icon: [<FaRegUserCircle />, <FaUserCircle />],
  },
  {
    name: "Resume",
    path: "/resume",
    icon: [<IoDocumentAttachOutline />, <IoDocumentAttach />],
  },
];



export default function CustomNavbar() {
  const location = useLocation();

  return (
    <div className="navbar sticky top-0 brightness-95 bg-gradient-to-r from-error via-primary to-error h-12 flex justify-center shadow-[0px_2px_3px_rgba(20,20,20,.8)]">
      <div className="w-[1100px]">
        <a href="/" className="text-4xl font-bold text-neutral flex-1 drop-shadow-[2px_4px_3px_rgba(0,0,0,.9)]">
          WL.
        </a>
        <div className="flex">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className="flex pl-3">
              <section className="flex items-center before:shadow-[2px_3px_4px_rgba(0,0,0,.7)] before:rounded-xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[3px] before:origin-right before:transition-transform before:duration-[375ms] before:scale-x-0 before:bg-accent before:absolute before:-bottom-[3px]">
                <div
                  className={`text-xl text-neutral pr-1.5  ${
                    item.path === location.pathname
                      ? "opacity-100 drop-shadow-[0_0_10px_rgba(240,240,240,0.12)]"
                      : "opacity-60 drop-shadow-[2px_4px_2px_rgba(0,0,0,.9)]"
                  }`}
                >
                  {item.icon[item.path === location.pathname ? 1 : 0]}
                </div>
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
              {index !== menuItems.length - 1 && (
                <div className="flex items-center pl-3">
                  <div className="inline-block rounded-xl h-[25px] w-[3px] bg-accent shadow-[2px_3px_4px_rgba(0,0,0,.7)]"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
