import _throttle from "lodash.throttle"
import Image from "next/image"
import Link from "next/link"
import { MutableRefObject, useEffect, useRef } from "react"
import { Nav, Window } from "./Layout.styled"
import SEO from "./SEO"

interface ILayout {
  description?: string
  siteTitle?: string
  robots?: string
}

let lastScroll = 0

const Layout: React.FC<ILayout> = ({
  children,
  description,
  siteTitle,
  robots,
}) => {
  const navRef = useRef<HTMLElement>(null)

  let menu

  useEffect(() => {
    if (navRef.current !== null) {
      menu = new Menu(navRef)
    }
  }, [navRef])

  const handleScroll = () => {
    menu.handleScroll(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener("scroll", _throttle(handleScroll, 100), false)

    return function cleanup() {
      window.removeEventListener("scroll", _throttle(handleScroll, 100), false)
    }
  }, [])

  return (
    <>
      <SEO description={description} siteTitle={siteTitle} robots={robots} />
      <Nav ref={navRef} className="fixed">
        <Image
          width="70"
          height="70"
          layout="fixed"
          src="/nasa-logo.png"
          alt="nasa official logo"
        />
        <Link href="/">
          <a>HOME</a>
        </Link>
      </Nav>
      <Window>
        <main>{children}</main>
      </Window>
    </>
  )
}

export default Layout

class Menu {
  constructor(private navRef: MutableRefObject<HTMLElement>) {}

  handleScroll(pageYOffset: Window["pageYOffset"]) {
    const currentScroll = pageYOffset
    const scrollUp = currentScroll < lastScroll

    if (scrollUp) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
    lastScroll = currentScroll
  }

  showMenu() {
    this.navRef.current?.classList.add("fixed")
  }

  hideMenu() {
    this.navRef.current?.classList.remove("fixed")
  }
}
