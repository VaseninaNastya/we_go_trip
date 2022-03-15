import { Wrapper } from "./Graph.elements";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import theme from "../../../../styles/theme";
import CustomTooltip from "./CustomTooltip/CustomTooltip";

const { colors } = theme;
const Graph = ({ data, title }) => {
  if (data)
    return (
      <Wrapper>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={600}
            barCategoryGap={0.5}
            height={300}
            data={data}
            margin={0}
          >
            <Tooltip
              cursor={{ fill: colors.white }}
              content={<CustomTooltip title={title} />}
            />
            <Bar dataKey="comparevalue" fill={colors.lightBlue} stackId="a" />
            <Bar dataKey="mainvalue" fill={colors.lightestBlue} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    );
  return null;
};

export default Graph;
