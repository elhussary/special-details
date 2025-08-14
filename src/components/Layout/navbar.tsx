import { Button } from "../ui/button";

// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full shadow-md bg-primary text-accent">
      <header className="container px-6">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/home-logo.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <a href="#">من نحن</a>
            </li>
            <li>
              <a href="#">رسالتنا</a>
            </li>
            <li>
              <a href="#">رؤيتنا</a>
            </li>
            <li>
              <a href="#">خدماتنا</a>
            </li>
          </ul>

          {/* CTA Button */}
          <Button size={"lg"} variant={"secondary"}>
            تواصل معنا
          </Button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
