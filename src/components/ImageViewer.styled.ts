import Image from "next/image"
import styled, { css } from "styled-components"

export const __Buttons = styled.div`
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
`

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
`

export const __Shadow = styled.div`
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
`

type Images = typeof Image & { size: number; layout: string }

export const __Img = styled(Image)<Images>`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  margin: auto;
  position: absolute;
  transition: all 900ms ease;
  z-index: 10;

  ${({ size }) =>
    css`
      transform: scale(${size === 0 ? 1 : size === 1 ? 1.5 : 2});
    `}
`
