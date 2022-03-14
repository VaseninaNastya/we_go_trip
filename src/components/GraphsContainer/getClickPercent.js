export default function getClickPercent(data) {
  return data.map((item) => {
    const clickPercent = Math.floor((item.click * 100) / item.view);
    return { date: item.date, value: clickPercent };
  });
}
