import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GovLogo from "../components/Logos/GovLogo";
import MinstryLogo from "../components/Logos/MinistryLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import MinstryText from "../components/Logos/MinistryText";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "News", link: "/news" },
    { name: "Activities", link: "/activities" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className="shadow-lg">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="py-3">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Government Logo */}
        <NavbarContent className="hidden sm:flex w-fit" justify="start">
          <NavbarBrand>
            <Link to={"/"}>
              <GovLogo width="70px" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Links */}
        <NavbarContent
          className="hidden sm:flex gap-6 md:gap-14 h-full"
          justify="center">
          <NavbarItem className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/news"}>
              News
            </NavLink>
          </NavbarItem>
          <NavbarItem className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/activities"}>
              Activities
            </NavLink>
          </NavbarItem>
          <NavbarItem className="text-lg text-black hover:text-[#CEA672] font-medium">
            <NavLink className="py-4" to={"/about"}>
              About
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        {/* Ministry Logo */}
        <NavbarContent justify="end">
          <Link to={"/"}>
            <NavbarBrand>
              <MinstryText width="150px" />
              <MinstryLogo width="70px" />
            </NavbarBrand>
          </Link>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="mt-4" key={`${item}-${index}`}>
              <Link onClick={() => setIsMenuOpen(false)} to={item.link}>
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
}
