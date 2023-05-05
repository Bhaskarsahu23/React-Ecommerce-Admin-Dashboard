/* eslint-disable react/prop-types */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SalesLineChart = ({ salesData }) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#5f5f5f" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="sales" stroke="#8f8f8f" fill="#add8e6" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
