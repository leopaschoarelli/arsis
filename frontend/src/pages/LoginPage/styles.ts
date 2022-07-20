import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIwMCA3MDAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjcwMCI+PGRlZnM+PHBhdGggZD0iTTEwNDYuNjcgMzU4LjI4QzEwNDYuNjcgNTEyLjQ4IDkyMS40OCA2MzcuNjcgNzY3LjI4IDYzNy42N0M2MTMuMDcgNjM3LjY3IDQ4Ny44OCA1MTIuNDggNDg3Ljg4IDM1OC4yOEM0ODcuODggMjA0LjA3IDYxMy4wNyA3OC44OCA3NjcuMjggNzguODhDOTIxLjQ4IDc4Ljg4IDEwNDYuNjcgMjA0LjA3IDEwNDYuNjcgMzU4LjI4WiIgaWQ9ImJ1b1Qwd0ZBQiI+PC9wYXRoPjxwYXRoIGQ9Ik05MzAuMDUgMzU4LjI4QzkzMC4wNSA0NDguMTEgODU3LjExIDUyMS4wNSA3NjcuMjggNTIxLjA1QzY3Ny40NCA1MjEuMDUgNjA0LjUgNDQ4LjExIDYwNC41IDM1OC4yOEM2MDQuNSAyNjguNDQgNjc3LjQ0IDE5NS41IDc2Ny4yOCAxOTUuNUM4NTcuMTEgMTk1LjUgOTMwLjA1IDI2OC40NCA5MzAuMDUgMzU4LjI4WiIgaWQ9ImJMTEJQbW9jZyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjAwIDEyNi4zMUwxMjAwIDcwMEwwIDcwMEwxMjAwIDEyNi4zMVoiIGlkPSJjMllrSGQwaVhjIj48L3BhdGg+PHBhdGggZD0iTTYxMy4yMiA3MDQuMzdMMCA3MDQuMzdMMCAxNjMuNjNMNjEzLjIyIDcwNC4zN1oiIGlkPSJhY1lWQWVpQ3kiPjwvcGF0aD48L2RlZnM+PGc+PGc+PGc+PGc+PHVzZSB4bGluazpocmVmPSIjYnVvVDB3RkFCIiBvcGFjaXR5PSIwLjE5IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjwvZz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiTExCUG1vY2ciIG9wYWNpdHk9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2MyWWtIZDBpWGMiIG9wYWNpdHk9IjAuMDkiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjxnPjx1c2UgeGxpbms6aHJlZj0iI2FjWVZBZWlDeSIgb3BhY2l0eT0iMC4xNSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48L2c+PC9nPjwvZz48L3N2Zz4=)
    no-repeat #00695c left bottom;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 55%;
  height: 50vh;
`;

export const DivImg = styled.div`
  @media screen and (min-width: 959px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 50%;
    gap: 50px;
    background-color: #33691e;
    height: 100%;

    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);

    img {
      max-width: 100%;
      height: 30%;
      z-index: 2;
    }

    h1 {
      z-index: 2;
      font-size: 24px;
      font-weight: 300;
      color: white;
    }

    svg {
      font-size: 480px;
      position: absolute;
      padding-left: 160px;
      padding-top: 400px;
      color: #467732;
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const DivForm = styled.div`
  @media screen and (min-width: 959px) {
    width: 50%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 95%;
`;

export const DivLabels = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldProps = styled(Field)`
  filter: saturate(1) hue-rotate(0deg);
  ::-webkit-autofill {
    -webkit-text-fill-color: blue !important;
  }
`;
