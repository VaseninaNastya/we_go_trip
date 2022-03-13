import { useState } from "react";
import { FlexBlock } from "./publicStyledElements";
import DatePickersContainer from "./components/DatePickersContainer/DatePickersContainer";

function App() {
  const [mainDates, setMainDates] = useState([null, null]);
  const [compareDates, setCompareDates] = useState([null, null]);
  return (
    <FlexBlock>
      <DatePickersContainer
        mainDatesState={[mainDates, setMainDates]}
        compareDatesState={[compareDates, setCompareDates]}
      />
    </FlexBlock>
  );
}

export default App;
