import * as React from "react";
import styled, { StyledComponent } from "styled-components";

const Heading = styled.h1<{ active?: boolean }>`
  color: ${(props) => (props?.active ? "red" : "blue")};
`;

export default function IApp(): any {
  return <Heading active>Stocks Trading with 6th Sense</Heading>;
}
