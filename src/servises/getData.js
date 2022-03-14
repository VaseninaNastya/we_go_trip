import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://wegotrip.com/api/v2/stats/plot"
    )}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data.contents;
};
export default getData;
