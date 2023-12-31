import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GovLogo from "./Logos/GovLogo";
import MinstryLogo from "./Logos/MinistryLogo";
import MinstryText from "./Logos/MinistryText";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "News", link: "/news" },
    { name: "Activities", link: "/activities" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className="shadow-lg">
      <div className="py-3">
        <div className="sm:hidden">
          <div aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </div>

        {/* Government Logo */}
        <div className="hidden sm:flex w-fit">
          <div>
            <Link to={"/"}>
              <GovLogo width="70px" />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="hidden sm:flex gap-6 md:gap-14 h-full">
          <div className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/news"}>
              News
            </NavLink>
          </div>
          <div className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/activities"}>
              Activities
            </NavLink>
          </div>
          <div className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/about"}>
              About
            </NavLink>
          </div>
        </div>

        {/* Ministry Logo */}
        <div>
          <Link to={"/"}>
            <div>
              <MinstryText width="150px" />
              <MinstryLogo width="70px" />
            </div>
          </Link>
        </div>

        <div>
          {menuItems.map((item, index) => (
            <div className="mt-4" key={`${item}-${index}`}>
              <Link onClick={() => setIsMenuOpen(false)} to={item.link}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
