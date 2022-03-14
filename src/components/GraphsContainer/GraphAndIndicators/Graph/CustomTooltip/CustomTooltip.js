import {
  Wrapper,
  MainDateContainer,
  MainDate,
  Value,
  CompareDate,
} from "./CustomTooltip.elements";
import { datePickerСonst } from "../../../../../constants/datePickerСonst";
import { titlesСonst } from "../../../../../constants/titlesСonst";

const { endDateOptions, startDateOptions, localeLang } = datePickerСonst;
const { sales, balance, click, views, percent, ruble } = titlesСonst;

const CustomTooltip = ({ active, payload, title }) => {
  const mainDateText =
    payload &&
    new Date(payload[0]?.payload.date).toLocaleDateString(
      localeLang,
      endDateOptions
    );

  const compareDateText =
    payload &&
    new Date(payload[0]?.payload.date).toLocaleDateString(
      localeLang,
      startDateOptions
    );
  const compareYear =
    payload && new Date(payload[0]?.payload.date).getFullYear() - 1;

  const mainValue = payload && payload[1]?.value;
  const compareValue = payload && payload[0]?.value;

  return (
    active &&
    payload &&
    payload[0] && (
      <Wrapper>
        <MainDateContainer>
          <MainDate>{mainDateText.slice(0, mainDateText.length - 3)}</MainDate>
          <Value>
            {mainValue}
            {(title === sales || title === balance) && ruble}
            {(title === click || title === views) && percent}
          </Value>
        </MainDateContainer>
        <CompareDate>
          {compareDateText} {compareYear}
        </CompareDate>
        <Value>
          {compareValue}
          {(title === sales || title === balance) && ruble}
          {(title === click || title === views) && percent}
        </Value>
      </Wrapper>
    )
  );
};

export default CustomTooltip;
