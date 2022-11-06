import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const SearchForm = styled.form`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  cursor: pointer;
  outline: none;

  &:hover {
    color: white;
    background-color: green;
  }
`;

export const Button = styled.button`
  color: black;
  background-color: #f5f4fa;
  font-size: 17px;
  line-height: 1.62;
  text-align: center;
  border: 1px solid #9c9c9c;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  max-width: 300px;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: green;
  }
`;
