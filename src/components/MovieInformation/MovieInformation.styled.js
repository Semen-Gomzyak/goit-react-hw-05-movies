import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInformationSection = styled.section`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const MovieInformationImage = styled.img`
  width: 250px;
  height: 375px;
`;

export const MovieInformationWrapper = styled.div`
  margin-left: 20px;
  padding: 5px;
`;

export const MovieInformationTitle = styled.h1`
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.15;
  text-transform: uppercase;
`;

export const MovieInformationText = styled.p`
  margin: 0 0 10px 0;
  font-style: normal;
  font-size: 17px;
  line-height: 1.33;
`;

export const MovieInformationSectionTitle = styled.h2`
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.15;
  text-transform: uppercase;
`;

export const MovieInformationComponentsList = styled.ul`
  padding: 10px;
  margin: 0;
`;

export const MovieInformationComponentsItem = styled.li`
  margin: 0 0 5px 0;
`;

export const MovieInformationComponentsLink = styled(Link)`
  font-style: normal;
  font-size: 17px;
  line-height: 1.33;
  color: black;
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

export const MovieInformationComponentsWrapper = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const MovieInformationGenresWrapper = styled.ul`
  padding: 10px;
`;
