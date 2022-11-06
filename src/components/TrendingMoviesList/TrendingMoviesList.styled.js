import { Link } from "react-router-dom";
import styled from "styled-components";

export const TrendMovieList = styled.ul`
  padding: 10px;
  list-style: none;
  margin: 0;
`;

export const TrendMovieItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

`;

export const TrendMovieLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;

  &:hover {
    font-weight: 700;
    color: green;
  }
`;
