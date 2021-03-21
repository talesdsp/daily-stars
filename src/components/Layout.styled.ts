import styled from "styled-components"

export const Window = styled.div`
  margin: auto;
  padding-top: 74px;
  width: 100%;
  max-width: 900px;

  main {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: #334;
  width: 100%;
  z-index: 5;
  transition: transform 600ms ease;
  transform: translateY(-100px);

  &.fixed {
    transform: initial;
    transform: translateY(0);
  }

  & > img {
    margin: 0 40px;
    width: 70px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: 20px;
      margin-right: 0;
    }
  }

  & > a {
    color: #fff;
    padding: 25px;
    text-decoration: none;

    &:hover {
      background-color: #445;
    }
  }
`
