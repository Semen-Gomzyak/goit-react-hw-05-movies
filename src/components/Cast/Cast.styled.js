import styled from 'styled-components';

export const CastSection = styled.section`
  padding: 10px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  padding: 10px;
  margin: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  border: 1px solid black;
  border-radius: 4px;
`;

export const CastImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const CastTitle = styled.h2`
  text-align: center;
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  text-transform: uppercase;
`;

export const CastText = styled.p`
  text-align: center;
  font-style: normal;
  font-size: 17px;
  line-height: 1.33;
`;
