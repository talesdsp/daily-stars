import Image from "next/image"
import styled from "styled-components"

interface ArticleImgProps {
  open?: boolean
}

const Container = styled.article<{ video?: boolean }>`
  height: fit-content;
  padding-top: ${(props) => (props.video ? "40px" : "150px")};
  padding-bottom: ${(props) => (props.video ? "40px" : "150px")};

  hr {
    width: 60%;
    margin: auto;
    border-color: var(--red);
    border-top-width: 3px;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
    margin: auto;
  }
`
type Images = ArticleImgProps &
  typeof Image & {
    size?: number
    layout: string
  }

export const __Img = styled(Image)<Images>`
  top: 0;
  pointer-events: none;
  left: 0;
  width: 100%;
  z-index: -1;
  cursor: pointer;
  margin: auto;
  position: fixed !important;
  transition: all 900ms ease;
`

export default Container

export const __Info = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: #222;
  color: #fff;
  padding: 30px;
  z-index: 10;
`

export const __Date = styled.span`
  margin-top: 40px;
  font-size: 14px;
  color: #eee;
`

export const __H1 = styled.h1`
  margin: 5px 0 20px;
`

export const __P = styled.p`
  font-family: sans-serif;
  line-height: 1.4;
  margin: 30px 0;
`
