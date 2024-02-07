import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <h1 className="logo"> Eugene Ebenezer</h1>
      </Link>
      <div className="navlinks-wrapper">
        <Link href="/" className="nav-link">
          Works
        </Link>
        <Link href="/" className="nav-link">
          About
        </Link>
        <Link href="/" className="nav-link">
          Contact
        </Link>
        <Link href="/" className="nav-link">
          Thoughts
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
