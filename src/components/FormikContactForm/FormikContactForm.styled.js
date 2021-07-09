import styled from "@emotion/styled/macro";
import { Form, Field } from "formik";

export const CustomForm = styled(Form)``;

export const Label = styled.label`
  display: inline-block;
  align-items: baseline;

  font-size: 20px;

  margin-bottom: 15px;

  & > svg {
    margin-right: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 350px;
  height: 35px;

  border: none;
  border-radius: 4px;
  padding-left: 15px;
  color: #444c5c;

  &:placeholder-shown {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #444c5c;
    box-shadow: 3px 4px 5px 0px rgb(120 165 163 / 20%);
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

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: #ff4d4d;
  margin-bottom: 10px;
`;
