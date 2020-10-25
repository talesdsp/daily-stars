import styled from "styled-components";

export const Newsletter = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #334;
  margin: 60px auto;
  width: max-content;
  padding: 50px 30px;
  border-radius: 12px;
  height: 250px;

  @media (max-width: 768px) {
    width: 90%;
  }

  h4 {
    font-size: 24px;
    font-weight: 500;
    word-wrap: wrap none;
    color: #fff;
  }

  & > div {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
