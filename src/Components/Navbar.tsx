import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";  
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from 'react-router-dom'    

export type NavbarProps = {};

export default function CustomNavbar(props: NavbarProps) {
  const menuItems = ["Home", "About", "Projects", "Resume"];

  return (
    <nav className="navbar sticky top-0 navbar-expand-xl bg-slate-800 mx-auto max-w-full px-5 h-12 flex items-center">
      <a href="/" className="text-3xl font-bold text-white text-left shrink">
        WL.
      </a>
      <nav>
          <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        </nav>
    </nav>
  );
}
