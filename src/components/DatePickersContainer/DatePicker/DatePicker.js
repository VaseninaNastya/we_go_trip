import DateFnsUtils from "@date-io/date-fns";
import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";
import {
  EndInput,
  StartInput,
  DatesContainer,
  DatesLabel,
  Wrapper,
} from "./DatePicker.elements";

const DatePicker = ({ dates, setDates }) => (
  <Wrapper>
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <DateRangePicker
        calendars={1}
        value={dates}
        onChange={(date) => setDates(date)}
        renderInput={(startProps, endProps) => {
          const startDate =
            Boolean(startProps.inputProps.value) &&
            new Date(startProps.inputProps?.value);
          const endDate =
            Boolean(endProps.inputProps.value) &&
            new Date(endProps.inputProps.value).toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          return (
            <DatesContainer>
              <StartInput
                ref={startProps.inputRef}
                {...startProps.inputProps}
              />
              <EndInput ref={endProps.inputRef} {...endProps.inputProps} />

              {startDate && endDate ? (
                <DatesLabel>
                  {startDate.getDate()} - {endDate.slice(0, endDate.length - 3)}
                </DatesLabel>
              ) : (
                <DatesLabel>dd-mm-yyyy</DatesLabel>
              )}
            </DatesContainer>
          );
        }}
      />
    </LocalizationProvider>
  </Wrapper>
);

export default DatePicker;
