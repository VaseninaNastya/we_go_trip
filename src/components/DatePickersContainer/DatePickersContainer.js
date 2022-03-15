import DatePicker from "./DatePicker/DatePicker";
import { Separator, Wrapper } from "./DatePickersContainer.elements";
import CompareDates from "./CompareDates/CompareDates";

const DatePickersContainer = ({ dates, setDates }) => (
  <Wrapper>
    <DatePicker dates={dates} setDates={setDates} />
    {dates[0] && <Separator>vs</Separator>}
    <CompareDates dates={dates} setDates={setDates} />
  </Wrapper>
);

export default DatePickersContainer;
