import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
`;

export const ItemActors = styled.li`
  flex-basis: calc((100% - 60px) / 4);
`;

export const ImgActors = styled.img`
  margin-bottom: 10px;
`;
export const TextActors = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  color: #6e1250;
`;
