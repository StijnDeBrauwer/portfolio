import styled from 'styled-components';

export const StyledBarChart = styled.div<{
  width: number;
  backgroundColor: string;
}>`
  width: ${(props) => props.width}%;
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;

  .progress {
    background-color: ${(props) => props.backgroundColor};
    height: 10px;
    border-radius: 1rem;
    transition: 1s ease;
    transition-delay: 0.5s;
  }
`;
