import styled from 'styled-components';

export const ReviewsSection = styled.section`
  padding: 10px;
`;

export const ReviewsList = styled.ul`
  padding: 10px;
  margin: 0;
  list-style: none;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 10px;
  padding: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReviewsTitle = styled.h2`
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  text-transform: uppercase;
`;

export const ReviewsText = styled.p`
  font-style: normal;
  font-size: 17px;
  line-height: 1.33;
`;
