import * as React from "react";
import styled from "styled-components";

export interface IAppProps {}

const Heading = styled.h1<{ active?: boolean }>`
  color: ${(props) => (props?.active ? "red" : "blue")};
`;

export default function IApp(props: IAppProps) {
  return <Heading active={true}>Stocks Trading with 6th Sense</Heading>;
}
