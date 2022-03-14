import DateFnsUtils from "@date-io/date-fns";
import { DateRangePicker, LocalizationProvider } from "@material-ui/pickers";
import {
  EndInput,
  StartInput,
  DatesContainer,
  DatesLabel,
  Wrapper,
  DateContainer,
} from "./DatePicker.elements";
import { datePickerСonst } from "../../../constants/datePickerСonst";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const {
  placeholder,
  maxDate,
  minDate,
  startDateOptions,
  endDateOptions,
  localeLang,
} = datePickerСonst;

const DatePicker = ({ dates, setDates }) => (
  <Wrapper>
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <DateRangePicker
        calendars={1}
        value={dates}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(date) => setDates(date)}
        renderInput={(startProps, endProps) => {
          const startDate =
            Boolean(startProps.inputProps.value) &&
            new Date(startProps.inputProps?.value).toLocaleDateString(
              localeLang,
              startDateOptions
            );
          const endDate =
            Boolean(endProps.inputProps.value) &&
            new Date(endProps.inputProps.value).toLocaleDateString(
              localeLang,
              endDateOptions
            );

          return (
            <DatesContainer>
              <StartInput
                ref={startProps.inputRef}
                {...startProps.inputProps}
              />
              <EndInput ref={endProps.inputRef} {...endProps.inputProps} />
              {startDate && endDate ? (
                <DatesLabel>
                  <CalendarTodayIcon color="action" />
                  <DateContainer>
                    {startDate.slice(0, endDate.length - 3)} -{" "}
                    {endDate.slice(0, endDate.length - 3)}
                  </DateContainer>
                </DatesLabel>
              ) : (
                <DatesLabel>{placeholder}</DatesLabel>
              )}
            </DatesContainer>
          );
        }}
      />
    </LocalizationProvider>
  </Wrapper>
);

export default DatePicker;
