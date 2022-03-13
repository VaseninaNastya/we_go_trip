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
  height: 20px;
  min-width: 141px;
  opacity: 0;
  padding: 0;
  border: 0;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;
export const DatesContainer = styled.div`
  position: relative;
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
