import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 32px;
`;
export const Interval = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  color: ${theme.colors.darkGray};
  font-size: ${theme.fonts.smallHeight};
  line-height: ${theme.fonts.smallLineHeight};
`;

export const GraphIntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Sum = styled.div`
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.bigHeight};
  line-height: ${theme.fonts.bigLineHeight};
`;

export const Title = styled.div`
  height: 32px;
  display: flex;
  font-size: ${theme.fonts.smallHeight};
  line-height: ${theme.fonts.smallLineHeight};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Benefit = styled.div`
  padding: 2px 4px;
  background: ${theme.rgba.halfGreen};
  border-radius: 4px;
  color: ${theme.colors.black};
  font-size: ${theme.fonts.smallHeight};
  line-height: ${theme.fonts.smallLineHeight};
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
  height: fit-content;
  width: fit-content;
`;
