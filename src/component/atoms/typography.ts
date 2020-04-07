import styled, { css } from "styled-components";

export const P = styled.p<PProps>`



  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.white &&
    css`
      color: #ffffff;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export interface PProps {
  fontSize?: number;
  fontWeight?: number | string;
  color?: string;
  white?: boolean;
  bold?: boolean;
  center?: boolean;
}
