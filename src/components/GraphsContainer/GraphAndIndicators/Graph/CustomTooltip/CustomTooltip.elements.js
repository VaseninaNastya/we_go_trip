import styled from "styled-components";
import theme from "../../../../../styles/theme";

export const Wrapper = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
`;

export const MainDateContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const MainDate = styled.div`
  font-size: ${theme.fonts.smallHeight};
  line-height: ${theme.fonts.smallLineHeight};
  color: ${theme.colors.blue};
`;

export const CompareDate = styled.div`
  font-size: ${theme.fonts.smallHeight};
  line-height: ${theme.fonts.smallLineHeight};
  color: ${theme.rgba.halfBlue};
`;

export const Value = styled.div`
  font-size: ${theme.fonts.mediumHeight};
  line-height: ${theme.fonts.mediumLineHeight};
  font-weight: ${theme.fonts.mediumWeight};
  color: ${theme.colors.black};
`;
