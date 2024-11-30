import { useState } from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { History, ShoppingCart } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/common/components/ui/navigation-menu";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "./ui/inputGroup";

import Banner from "./Banner";
import { cn } from "../lib/utils";

const singleItemClasses = cva(
  "cursor-pointer font-medium h-10 w-max rounded-md bg-background px-4 py-2 text-base text-nowrap transition-colors hover:bg-accent hover:text-accent-foreground hover:font-semibold focus:bg-accent focus:text-accent-foreground focus:outline-none",
  {
    variants: {
      screenSize: {
        sm: "text-sm py-1 h-9 border border-border rounded-full text-gray-600",
      },
    },
  }
);

const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>("");
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setToggleMobileMenu(false);
  };
  // TODO: if user changes/move to another page or click on another link, to remove style on all active links, if not automatic
  // useEffect(() => {
  //   const handleDocumentClick = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (!target.closest("a")) {
  //       setActiveLink(null);
  //     }
  //   };

  //   const handleRouteChange = () => {
  //     setActiveLink(null);
  //   };

  //   document.addEventListener("click", handleDocumentClick);
  //   window.addEventListener("popstate", handleRouteChange);
  //   window.addEventListener("hashchange", handleRouteChange);

  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //     window.removeEventListener("popstate", handleRouteChange);
  //     window.removeEventListener("hashchange", handleRouteChange);
  //   };
  // }, []);

  return (
    <header className="w-full">
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      {/* upper links */}
      <nav className="container relative flex justify-between py-2">
        <button
          className="z-50 nav-toggle sm:hidden"
          aria-label="Toggle mobile menu"
          onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        >
          {!toggleMobileMenu ? (
            <svg className="w-6 h-6 nav-icon" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 nav-close-icon" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          )}
        </button>
        <div className="flex gap-2">
          <div className="flex items-center">
            <span className="mr-1 text-xs opacity-50">Language:</span>
            <Select defaultValue="english">
              <SelectTrigger className="w-[80px] h-8 md:h-6 p-2 text-xs font-semibold opacity-75">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="swahili">Swahili</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="arabic">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center">
            <span className="mr-1 text-xs opacity-50">Currency:</span>
            <Select defaultValue="KSH">
              <SelectTrigger className="w-[60px] h-8 md:h-6 p-2 text-xs font-semibold opacity-75">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="KSH">KSH</SelectItem>
                <SelectItem value="DINAR">DN</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div
          className={cn(
            "absolute left-0 top-0 sm:static bg-white z-20 flex flex-col sm:flex-row items-center gap-4 text-xs font-semibold p-4 sm:p-0 sm:opacity-100 max-[600px]:w-full max-[600px]:text-sm",
            !toggleMobileMenu && "top-[-250px] opacity-0"
          )}
        >
          <a
            href="#"
            className={
              "hover:underline " +
              (activeLink === "link1" ? "text-red-500 underline" : "")
            }
            onClick={() => handleLinkClick("link1")}
          >
            <span>My Account</span>
          </a>
          <a
            href="#"
            className={
              "hover:underline " +
              (activeLink === "link2" ? "text-red-500 underline" : "")
            }
            onClick={() => handleLinkClick("link2")}
          >
            <span>My Wishlist</span>
          </a>
          <a
            href="#"
            className={
              "hover:underline " +
              (activeLink === "link3" ? "text-red-500 underline" : "")
            }
            onClick={() => handleLinkClick("link3")}
          >
            <span>Checkout</span>
          </a>
          <div className="pl-4 sm:ml-2 sm:border-l-2">
            <Button size="sm">
              <Link to="/signUp">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>
      {/* navigation bar */}
      <div className="container relative flex items-center justify-between">
        <div>
          <img
            src="images/img_header_logo.png"
            alt=""
            className="object-contain h-6 w- max-w-32 max-[500px]:hidden"
          />
        </div>
        <div className="absolute top-full max-[500px]:w-full max-[500px]:pr-8 lg:static">
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={singleItemClasses()}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Offers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={singleItemClasses()}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={singleItemClasses()}>
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* mobile navigation menu */}
          <div className="flex m-2 ml-0 select-none cursor-grab lg:hidden scrollable-container">
            <ul className="flex gap-1">
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Home</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">All</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Today's deal</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Gift cards</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Inspirations</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Offers</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#">Budget friendly</a>
              </li>
              <li className={singleItemClasses({ screenSize: "sm" })}>
                <a href="#" className="flex items-center gap-1">
                  <span>More</span>
                  <ChevronDown size={20}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex max-[500px]:grow md:max-lg:grow max-w-[500px]">
          <InputGroup>
            <InputLeftElement className="left-[5px]">
              <img
                src="images/img_searchIcon.svg"
                alt="searchImg"
                className="w-5 h-5"
              />
            </InputLeftElement>
            <Input
              type="text"
              size="sm"
              value={searchValue}
              placeholder="Search for products..."
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-grow rounded-[18px] pl-10 overflow-hidden border border-border text-gray-800"
            />
            {searchValue && (
              <InputRightElement onClick={() => setSearchValue("")} />
            )}
          </InputGroup>
          <a href="#" className="flex items-center justify-center w-8 ml-2">
            <History size={20} />
          </a>
          <a href="#" className="flex items-center justify-center w-8 ml-2">
            <ShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
