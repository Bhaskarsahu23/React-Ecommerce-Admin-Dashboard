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
        <XAxis dataKey="name" stroke="#000" />
        <YAxis stroke="#000" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="sales" stroke="#008f8f" fill="#60bffd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
