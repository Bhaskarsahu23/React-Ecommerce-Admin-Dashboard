import { revenu, orders, montlyprofit, productcart } from '../../assets';
import SalesLineChart from '../../components/Charts/SalesLineChart';
import { salesData } from '../../utils';
const Dashboard = () => {
  return (
    <div className="w-full p-6 grid grid-cols-4 gap-4">
      <div className="col-span-full">
        <h1 className="text-4xl font-semibold">DashBoard</h1>
        <p>Whole data about your business here.</p>
      </div>
      <div className=" col-span-full grid grid-cols-4 gap-6 ">
        <div className="bg-gray-300 p-4 flex justify-start items-center gap-4 rounded-md">
          <div className="p-2 rounded-full bg-blue-300">
            <img src={revenu} alt="revenu" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Total Revenue</h1>
            <h2 className="text-xl font-bold">₹ 5,00,000,00</h2>
            <p className="text-sm">Shipping fees are not included</p>
          </div>
        </div>
        <div className="bg-gray-300 p-4 flex justify-start items-center gap-4 rounded-md">
          <div className="p-2 rounded-full bg-blue-300">
            <img src={orders} alt="revenu" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Total Orders</h1>
            <h2 className="text-xl font-semibold">500</h2>
            <p className="text-sm">Including all orders</p>
          </div>
        </div>
        <div className="bg-gray-300 p-4 flex justify-start items-center gap-4 rounded-md">
          <div className="p-2 rounded-full bg-blue-300">
            <img src={productcart} alt="revenu" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Total Products</h1>
            <h2 className="text-xl font-semibold">900</h2>
            <p className="text-sm">In 19 Categories</p>
          </div>
        </div>
        <div className="bg-gray-300 p-4 flex justify-start items-center gap-4 rounded-md">
          <div className="p-2 rounded-full bg-blue-300">
            <img src={montlyprofit} alt="revenu" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Montly earning</h1>
            <h2 className="text-xl font-bold">₹ 4,00,000</h2>
            <p className="text-sm">Based in your local time.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-96 col-span-2 bg-gray-300 flex flex-col rounded-md">
        <h1 className="font-bold text-xl p-4">Sales Chart</h1>
        <SalesLineChart salesData={salesData} />
      </div>
    </div>
  );
};
export default Dashboard;
