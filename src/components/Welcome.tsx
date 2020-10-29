import { useEffect } from "react";
import SearchBox from "./SearchBox";
import { Container } from "./Welcome.styled";

type WelcomeProps = {};

const Welcome: React.FC<WelcomeProps> = () => {
  useEffect(() => {
    const h1 = document.querySelector("div > h1");
    const h21 = document.querySelector("div > h2:nth-of-type(1)");
    const h22 = document.querySelector("div > h2:nth-of-type(2)");
    const h23 = document.querySelector("div > h2:nth-of-type(3)");
    const searchBox = document.querySelector(".search");

    [h1, h21, h22, h23, searchBox].reduce((_, current, i) => {
      const animationTime = 900;
      const delay = 1200 * i;

      return setTimeout(() => {
        current.classList.add("faded");
      }, animationTime + delay);
    }, {});
  }, []);

  return (
    <>
      <Container>
        <h1>Welcome Traveler</h1>
        <h2>Take a sit.</h2>
        <h2>Have Some coffee.</h2>
        <h2>Your journey starts now.</h2>
      </Container>

      <SearchBox />
    </>
  );
};

export default Welcome;
