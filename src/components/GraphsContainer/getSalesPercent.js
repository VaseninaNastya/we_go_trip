import { titlesСonst } from "../../constants/titlesСonst";

export default function getSalesPercent(salesData) {
  const { countWithoutClick } = titlesСonst;
  return salesData.map((salesItem) => {
    const res =
      salesItem.value - countWithoutClick > 0
        ? Math.floor(
            ((salesItem.value - countWithoutClick) * 100) / salesItem.value
          )
        : 0;
    return { date: salesItem.date, value: res };
  });
}
