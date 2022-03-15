export default function getSum(data) {
  const result = data.reduce((acc, curr) => {
    return acc + curr.mainvalue;
  }, 0);
  return Math.floor(result);
}
