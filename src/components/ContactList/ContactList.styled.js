import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  /* text-align: center; */
`;

export const ListItem = styled.li`
  width: 350px;
  display: inline-flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  color: #1995ad;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-transform: capitalize;

  cursor: pointer;

  transition: all 300ms linear;
  margin-left: auto;

  &:hover,
  &:focus {
    color: #f1f1f2;
    background-color: #444c5c;
    transform: scale(1.03);
  }
`;
