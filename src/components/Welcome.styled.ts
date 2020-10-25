import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 60px 60px;
  color: #fff;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    transform: translateY(-100%);
    font-size: 70px;
    opacity: 0;
    transition: all 900ms ease;
  }

  h2 {
    opacity: 0;
    margin: 8px 0;
    font-size: 21px;
    font-weight: 500;
    transition: all 900ms ease;
    transform: translateY(-100%);
  }

  h2:nth-of-type(2) {
    transform: translateY(-100%);
  }

  h2:nth-of-type(3) {
    transform: translateY(-100%);
  }
`;
