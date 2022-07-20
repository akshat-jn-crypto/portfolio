import styled from 'styled-components';

export const Span = styled.span`
font-family: Cursive;
width:100%;
font-size: 87.5%;
    scroll-behavior: smooth;
//font-size: 2rem;
`;

export const SPan = styled.span`
font-family: Cursive;
width:100%;
font-size: 87.5%;
    scroll-behavior: smooth;
//font-size: 2rem;
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    font-family: Cursive;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    font-family: Cursive;
    flex-direction: column;

    margin: 0 auto;
  }
`;
