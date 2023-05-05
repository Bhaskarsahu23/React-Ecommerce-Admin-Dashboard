/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const NewUsersBarChart = ({ newUsersData }) => {
  return (
    <BarChart width={600} height={300} data={newUsersData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#5f5f5f" />
      <XAxis dataKey="name" stroke="#000" />
      <YAxis stroke="#000" />
      <Tooltip />
      <Legend />
      <Bar dataKey="newUsers" fill="#60bffd" />
    </BarChart>
  );
};

export default NewUsersBarChart;
