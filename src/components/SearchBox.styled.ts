import styled from "styled-components";

export const Container = styled.form`
  transform: translateY(-100%);
  opacity: 0;
  transition: all 900ms ease;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 60px;
  position: relative;

  h3 {
    font-size: 30px;
    color: #fff;
    font-weight: 500;
  }

  & > div {
    margin: 20px auto;
    display: flex;
    flex-direction: row;
  }
`;
