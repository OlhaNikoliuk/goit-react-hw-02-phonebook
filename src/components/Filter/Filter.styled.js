import styled from "@emotion/styled/macro";

export const FilterInput = styled.input`
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #444c5c;
    box-shadow: 3px 4px 5px 0px rgb(120 165 163 / 20%);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & input {
    margin-top: 5px;
    width: 350px;
    height: 35px;

    border: none;
    border-radius: 4px;
  }
`;
