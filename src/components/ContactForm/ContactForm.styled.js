import styled from "@emotion/styled/macro";

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  width: 350px;
  height: 35px;

  border: none;
  border-radius: 4px;
  padding-left: 15px;
  color: #444c5c;

  &:placeholder-shown {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  color: #1995ad;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;

  cursor: pointer;

  margin-top: 10px;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: #f1f1f2;
    background-color: #444c5c;
    transform: scale(1.03);
  }
`;
