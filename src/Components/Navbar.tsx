import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

export type NavbarProps = {};

export default function CustomNavbar(props: NavbarProps) {
  const menuItems = ["Home", "About", "Projects", "Resume"];

  return (
    <Navbar className="bg-blue-400 sticky top-0">
      <h1
        className="text-3xl font-bold" /* style={{ paddingBottom: 15 }} className="heading" */
      >
        Hi There!
      </h1>
    </Navbar>
  );
}
