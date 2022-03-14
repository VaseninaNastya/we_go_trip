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

  const { data, isLoading } = useQuery("res", () => getData());

  const parsedData = !isLoading && data && JSON.parse(data);
  const clickPercent =
    parsedData && getClickPercent(parsedData.views_to_clicks);

  const purchasesData = parsedData && filterData(parsedData.purchases, dates);
  const viewAndClicksData = parsedData && filterData(clickPercent, dates);
  const salesPercent = parsedData && getSalesPercent(parsedData.purchases);
  const salesPercentData = parsedData && filterData(salesPercent, dates);
  const { sales, balance, click, views } = titlesСonst;

  return (
    parsedData && (
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
