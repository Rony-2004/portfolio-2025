import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down and hide navbar
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false); // Hide navbar
      } else {
        setIsNavbarVisible(true); // Show navbar
      }

      setLastScrollY(currentScrollY);
      
      // Shrink navbar when scrolling down 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 transition-all duration-300 ${
        isNavbarVisible ? "top-0" : "-top-[80px]" // Hide navbar by moving it out of view
      }`}
    >
      <div
        className={`flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center rounded-r-full rounded-l-full border-orange border-[0.5px] transition-all duration-300 ${
          isScrolled ? "p-4" : "p-6"
        }`}
      >
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
