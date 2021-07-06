import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  display: block;
  padding: 15px 30px;
  margin: 0 auto;

  background-color: #a1d6e2;
  color: #444c5c;
  border-radius: 4px;
  box-shadow: 5px 6px 8px 0px rgba(120, 165, 163, 0.2);

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;

  text-align: center;
`;
