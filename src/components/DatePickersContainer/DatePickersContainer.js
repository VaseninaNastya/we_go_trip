import DatePicker from "./DatePicker/DatePicker";
import { Separator, Wrapper } from "./DatePickersContainer.elements";

const DatePickersContainer = ({ mainDatesState, compareDatesState }) => {
  const [mainDates, setMainDates] = mainDatesState;
  const [compareDates, setCompareDates] = compareDatesState;
  return (
    <Wrapper>
      <DatePicker dates={mainDates} setDates={setMainDates} />
      <Separator>vs</Separator>
      <DatePicker dates={compareDates} setDates={setCompareDates} />
    </Wrapper>
  );
};

export default DatePickersContainer;
