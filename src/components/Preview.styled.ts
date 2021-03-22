import Image from "next/image"
import styled from "styled-components"

export const Li = styled.li`
  position: relative;
  width: 100%;
  width: 100%;
  overflow: hidden;
  height: 300px;
  cursor: pointer;
  margin: 40px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);

  img {
    min-width: 100%;
    transition: filter 900ms ease;
    text-indent: -100%;
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover img {
    filter: brightness(0.6);
  }

  &:hover h3 {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const __Img = styled(Image)<typeof Image & { layout: string }>`
  position: absolute;
  height: 100% !important;
`

export const __H3 = styled.h3`
  opacity: 0;
  color: #fff;
  position: absolute;
  bottom: 30px;
  left: 30px;
  transition: opacity 900ms ease;
`

export const __VideoSkeleton = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: relative;

  &::before,
  &::after {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    position: absolute;
    content: "";
  }

  &::before {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    background-color: #000;
    border: 4px solid var(--yellow);
  }

  &::after {
    left: 8px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 40px solid var(--yellow);
  }

  :hover {
    background-color: #111;
    &::before {
      background-color: #111;
    }
  }
`
