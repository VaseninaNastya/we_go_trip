const addYear = (date) => {
  const dateArr = date.split("-");
  const [year] = dateArr;
  return `${Number(year) + 1}-${dateArr[1]}-${dateArr[2]}`;
};

export default function filterData(data, dates) {
  const [startDates, endDates] = dates;

  const startDay =
    startDates?.getDate() < 10
      ? `0${startDates?.getDate()}`
      : startDates?.getDate();
  const endDay =
    endDates?.getDate() < 10 ? `0${endDates?.getDate()}` : endDates?.getDate();
  const startMonth =
    startDates?.getMonth() + 1 < 10
      ? `0${startDates?.getMonth() + 1}`
      : startDates?.getMonth() + 1;
  const endtMonth =
    endDates?.getMonth() + 1 < 10
      ? `0${endDates?.getMonth() + 1}`
      : endDates?.getMonth() + 1;
  const startMainYear = startDates?.getFullYear();
  const endMainYear = endDates?.getFullYear();

  const startCompareYear = startDates?.getFullYear() - 1;
  const endCompareYear = endDates?.getFullYear() - 1;

  const startMainIndex = data?.findIndex(
    (el) => el.date === `${startMainYear}-${startMonth}-${startDay}`
  );

  const endMainIndex = data?.findIndex(
    (el) => el.date === `${endMainYear}-${endtMonth}-${endDay}`
  );

  const startCompareIndex = data?.findIndex(
    (el) => el.date === `${startCompareYear}-${startMonth}-${startDay}`
  );

  const endCompareIndex = data?.findIndex(
    (el) => el.date === `${endCompareYear}-${endtMonth}-${endDay}`
  );
  const compareData = data
    .slice(startCompareIndex, endCompareIndex + 1)
    .map((item) =>
      Object.entries(item).map(([key, value]) =>
        key === "value" ? [`compare${key}`, value] : [`${key}`, addYear(value)]
      )
    )
    .map((item) => Object.fromEntries(item));

  const mainData = data
    .slice(startMainIndex, endMainIndex + 1)
    .map((item) =>
      Object.entries(item).map(([key, value]) =>
        key === "value" ? [`main${key}`, value] : [`${key}`, value]
      )
    )
    .map((item) => Object.fromEntries(item))
    .map((item) => {
      const compareValue = compareData.filter(
        (compareItem) => compareItem.date === item.date
      );
      return {
        date: item.date,
        mainvalue: item.mainvalue,
        comparevalue: compareValue[0]?.comparevalue,
      };
    });

  return mainData;
}
