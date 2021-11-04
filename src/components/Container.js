import styled from 'styled-components';
import breakpoints from '../style/breakpoints';

const Container = styled.div`
  padding: 4rem 0;
  width: 90%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: "profile"
                        "."
                        "."
                        "."
                        "."
                        "."
                        ".";

  @media screen and ${breakpoints.l} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: "profile . . "
                          "profile . . "
                          "profile . . ";
  }

  @media screen and ${breakpoints.xl} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "profile . . ."
                         "profile . . .";
  }
`;

export default Container;