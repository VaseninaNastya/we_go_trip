import {
  Wrapper,
  Interval,
  GraphIntervalContainer,
  Sum,
  Title,
  Benefit,
} from "./GraphAndIndicators.elements";
import Graph from "./Graph/Graph";
import { datePickerСonst } from "../../../constants/datePickerСonst";
import { titlesСonst } from "../../../constants/titlesСonst";
import { FlexBlock, FlexColumn } from "../../../publicStyledElements";
import getSum from "./getSum";
import getPrevSum from "./getPrevSum";

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
    console.log("data", data);
    const sum = getSum(data);
    const prevSum = getPrevSum(data);
    const mean = getSum(data) / data.length;
    const prevMean = getPrevSum(data) / data.length;
    return (
      <Wrapper>
        <FlexColumn>
          <Title>{title}</Title>
          <FlexBlock>
            <Sum>
              {title === balance && sum}
              {(title === click || title === views || title === sales) && mean}
              {(title === sales || title === balance) && ruble}
              {(title === click || title === views) && percent}
            </Sum>
            {title === balance && (
              <Benefit>{`+${Math.floor((sum * 100) / prevSum)}%`}</Benefit>
            )}
            {title === sales && (
              <Benefit>{`+${Math.floor((mean * 100) / prevMean)}%`}</Benefit>
            )}
          </FlexBlock>
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
