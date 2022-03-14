import { useState } from "react";
import { Wrapper, GraphsWrapper } from "./GraphsContainer.elements";
import DatePickersContainer from "../DatePickersContainer/DatePickersContainer";
import GraphAndIndicators from "./GraphAndIndicators/GraphAndIndicators";
import { datePickerСonst } from "../../constants/datePickerСonst";
import filterData from "./filterData";
import getClickPercent from "./getClickPercent";
import getSalesPercent from "./getSalesPercent";
import { titlesСonst } from "../../constants/titlesСonst";

import getData from "../../servises/getData";
import { useQuery } from "react-query";

const GraphsContainer = () => {
  const { maxDate } = datePickerСonst;
  const [dates, setDates] = useState([null, maxDate]);
  const [startDates, endDates] = dates;

  const { data, isSuccess } = useQuery("res", () => getData());

  const clickPercent = isSuccess && getClickPercent(data.views_to_clicks);

  const purchasesData = isSuccess && filterData(data.purchases, dates);
  const viewAndClicksData = isSuccess && filterData(clickPercent, dates);
  const salesPercent = isSuccess && getSalesPercent(data.purchases);
  const salesPercentData = isSuccess && filterData(salesPercent, dates);
  const { sales, balance, click, views } = titlesСonst;

  return (
    isSuccess && (
      <Wrapper>
        <DatePickersContainer dates={dates} setDates={setDates} />
        {startDates && endDates && (
          <GraphsWrapper>
            <GraphAndIndicators
              data={purchasesData}
              dates={dates}
              title={sales}
            />
            <GraphAndIndicators
              data={purchasesData}
              dates={dates}
              title={balance}
            />
            <GraphAndIndicators
              data={viewAndClicksData}
              dates={dates}
              title={views}
            />
            <GraphAndIndicators
              data={salesPercentData}
              dates={dates}
              title={click}
            />
          </GraphsWrapper>
        )}
      </Wrapper>
    )
  );
};

export default GraphsContainer;
