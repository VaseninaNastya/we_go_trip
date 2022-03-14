import axios from "axios";
import { serviceConst } from "../constants/serviceConst";
const { url } = serviceConst;

const getData = async () => {
  const { data } = await axios.get(url);
  return data;
};
export default getData;
