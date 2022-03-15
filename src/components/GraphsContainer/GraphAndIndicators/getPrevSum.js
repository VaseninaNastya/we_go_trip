export default function getPrevSum(data) {
  const result = data.reduce((acc, curr) => {
    return acc + curr.comparevalue;
  }, 0);
  return Math.floor(result);
}
