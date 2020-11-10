import _throttle from "lodash.throttle";
import Link from "next/link";
import { MutableRefObject, useEffect, useRef } from "react";
import { Nav, Window } from "./Layout.styled";
import SEO from "./SEO";

interface ILayout {
  description?: string;
  siteTitle?: string;
  robots?: string;
}

let lastScroll = 0;

const Layout: React.FC<ILayout> = ({
  children,
  description,
  siteTitle,
  robots,
}) => {
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (navRef.current === null) return;

    new Menu(window.pageYOffset, navRef).handleScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", _throttle(handleScroll, 100), false);

    return function cleanup() {
      window.removeEventListener("scroll", _throttle(handleScroll, 100), false);
    };
  }, []);

  return (
    <>
      <SEO description={description} siteTitle={siteTitle} robots={robots} />
      <Nav ref={navRef} className="fixed">
        <Link href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-599x599.png"
            alt={"nasa official logo"}
          />
        </Link>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </Nav>
      <Window>
        <main>{children}</main>
      </Window>
    </>
  );
};

export default Layout;

class Menu {
  constructor(
    private pageYOffset: Window["pageYOffset"],
    private navRef: MutableRefObject<HTMLElement>
  ) {
    this.pageYOffset = pageYOffset;
  }

  handleScroll() {
    const currentScroll = this.pageYOffset;
    const scrollUp = currentScroll < lastScroll;

    if (scrollUp) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
    lastScroll = currentScroll;
  }

  showMenu() {
    this.navRef.current?.classList.add("fixed");
  }

  hideMenu() {
    this.navRef.current?.classList.remove("fixed");
  }
}