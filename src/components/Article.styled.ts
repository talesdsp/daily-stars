import styled from "styled-components";

interface ArticleImgProps {
  open?: boolean;
}

const Container = styled.article<{ video?: boolean }>`
  height: fit-content;
  padding: ${(props) => (props.video ? "40px 0" : "150px 0")};
  hr {
    width: 60%;
    margin: auto;
    border-color: var(--red);
    border-top-width: 3px;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export default Container;

type Images = ArticleImgProps & {
  size?: number;
  mobileHeroSize?: number;
};

export const __Img = styled.img<Images>`
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  z-index: -1;
  object-fit: cover;
  cursor: pointer;
  margin: auto;
  position: absolute;
  transition: all 900ms ease;

  @media (max-width: 768px) {
    height: ${(props) => props.mobileHeroSize}px;
  }
`;

export const __Info = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #222;
  color: #fff;
  padding: 30px;
  z-index: 10;
`;

export const __Date = styled.span`
  margin-top: 40px;
  font-size: 14px;
  color: #eee;
`;

export const __H1 = styled.h1`
  margin: 5px 0 20px;
`;

export const __P = styled.p`
  font-family: sans-serif;
  line-height: 1.4;
  margin: 30px 0;
`;
