import styled, { css } from "styled-components";

interface ArticleImgProps {
  open?: boolean;
}

const Article = styled.article<{ video?: boolean }>`
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
export default Article;

export const __Buttons = styled.div<ArticleImgProps>`
  display: none;
  ${(props) =>
    props.open &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      position: fixed;
      display: flex;
      flex-direction: row;
      bottom: 40px;
      width: 100px;
      justify-content: space-between;
      right: 40px;
      z-index: 15;
    `}
`;

export const __Zoom = styled.button`
  cursor: pointer;
  width: 40px;
  font-weight: bold;
  font-size: 18px;
  color: #444;
  height: 40px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #ddd;
`;

export const __Shadow = styled.div<ArticleImgProps>`
  display: none;

  ${(props) =>
    props.open &&
    css`
      display: block;
      overflow: auto;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 10;
    `}
`;

type Images = ArticleImgProps & {
  size?: number;
  mobileHeroSize?: number;
};

export const __Img = styled.img<Images>`
  top: 0px;
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

  ${({ open, size }) =>
    open &&
    css`
      z-index: 10;
      left: 0;
      top: 0;
      right: 0;
      position: absolute;
      margin: auto;
      object-fit: contain;
      height: ${size === 0 ? "100%" : size === 1 ? "150%" : "200%"};
      width: ${size === 0 ? "100%" : size === 1 ? "150%" : "200%"};
    `}
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

export const __Button = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  padding: 5px 20px;
  font-size: 20px;
  margin: auto;
  background-color: var(--yellow);
`;
