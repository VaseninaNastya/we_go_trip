import {
  Wrapper,
  Interval,
  GraphIntervalContainer,
  Sum,
  Title,
} from "./GraphAndIndicators.elements";
import Graph from "./Graph/Graph";
import { datePickerСonst } from "../../../constants/datePickerСonst";
import { titlesСonst } from "../../../constants/titlesСonst";
import { FlexBlock, FlexColumn } from "../../../publicStyledElements";
import getSum from "./getSum";

const { endDateOptions, localeLang } = datePickerСonst;
const { sales, balance, click, views, percent, ruble } = titlesСonst;

const GraphAndIndicators = ({ data, dates, title }) => {
  if (data && dates) {
    const [startDates, endDates] = dates;

    const startDateText = new Date(startDates).toLocaleDateString(
      localeLang,
      endDateOptions
    );
    const endDateText = new Date(endDates).toLocaleDateString(
      localeLang,
      endDateOptions
    );
    const sum = getSum(data);
    const mean = getSum(data) / data.length;
    return (
      <Wrapper>
        <FlexColumn>
          <Title>{title}</Title>
          <Sum>
            {title === balance && sum}
            {(title === click || title === views || title === sales) && mean}
            {(title === sales || title === balance) && ruble}
            {(title === click || title === views) && percent}
          </Sum>
        </FlexColumn>
        <GraphIntervalContainer>
          <Graph data={data} title={title} />
          <Interval>
            <FlexBlock>
              {startDateText.slice(0, startDateText.length - 3)}
            </FlexBlock>
            <FlexBlock>
              {endDateText.slice(0, endDateText.length - 3)}
            </FlexBlock>
          </Interval>
        </GraphIntervalContainer>
      </Wrapper>
    );
  }
  return null;
};

export default GraphAndIndicators;
