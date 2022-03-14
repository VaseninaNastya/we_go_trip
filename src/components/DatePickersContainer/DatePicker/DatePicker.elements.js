import styled from "styled-components";

export const EndInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  padding: 0;
  border: 0;
  position: absolute;
  top: 0;
`;

export const StartInput = styled.input`
  height: 24px;
  width: 100%;
  opacity: 0;
  padding: 0;
  border: 0;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;
export const DatesContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
`;

export const DatesLabel = styled.div`
  z-index: 1;
  display: flex;
  min-width: 141px;
`;

export const Wrapper = styled.div`
  min-width: 141px;
  display: flex;
  position: relative;
  top: 0;
  height: 20px;
`;
export const DateContainer = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 2px;
`;
