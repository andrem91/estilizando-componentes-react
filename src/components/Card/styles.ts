import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

/*
export const Card = styled.div`
  background-color: grey;
  height: 400px;
  width: 400px;
  padding: 30px;
  color: white;
`;
*/

export const Card = styled.div(() => ({
  backgroundColor: 'grey',
  width: 400,
  height: 400,
  padding: 30,
}));

/*
export const Title = styled.span<{ $color: string, $backgroundColor?: string }>`
font-size: 19px;
font-weight: 800;
color: ${props => props.$color};
background-color: ${props => props.$backgroundColor};
`;
*/

interface TitleProps {
  $color: string,
  $backgroundColor: string,
  children: ReactNode
}

export const Title: FunctionComponent<TitleProps> = styled.span(props => ({
  fontSize: 19,
  fontWeight: 800,
  color: props.$color,
  backgroundColor: props.$backgroundColor
}));
