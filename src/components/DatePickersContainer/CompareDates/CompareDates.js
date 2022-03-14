import {
  DatesContainer,
  DatesLabel,
  DateContainer,
} from "../DatePicker/DatePicker.elements";
import { Wrapper } from "./CompareDates.elements";
import { datePickerСonst } from "../../../constants/datePickerСonst";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const CompareDates = ({ dates }) => {
  const [startDate, endDate] = dates;
  const { startDateOptions, localeLang } = datePickerСonst;

  const compareStartDate = new Date(startDate).toLocaleDateString(
    localeLang,
    startDateOptions
  );
  const compareEndDate = new Date(endDate).toLocaleDateString(
    localeLang,
    startDateOptions
  );

  const compareYear = new Date(endDate).getFullYear() - 1;

  return (
    <Wrapper>
      <DatesContainer>
        {startDate && endDate && (
          <DatesLabel>
            <CalendarTodayIcon color="action" />
            <DateContainer>
              {compareStartDate} - {compareEndDate} {compareYear}
            </DateContainer>
          </DatesLabel>
        )}
      </DatesContainer>
    </Wrapper>
  );
};

export default CompareDates;
