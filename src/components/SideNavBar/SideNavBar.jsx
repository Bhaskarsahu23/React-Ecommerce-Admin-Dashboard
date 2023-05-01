import { menu } from '../../assets';
import { sideNavLinks } from '../../utils';
import { NavLink } from 'react-router-dom';
const SideNavBar = () => {
  return (
    <div className="w-[100%] h-screen bg-darkblue text-white flex flex-col justify-start items-center p-4 border-r-2 border-slate-800 shadow-bs">
      <div className="w-full flex justify-between items-center ">
        <h1 className="font-bold">Ecommerce Dashboard</h1>
        <img src={menu} alt="menu" className="w-8 h-8 cursor-pointer" />
      </div>
      <nav className="w-full mt-10 flex flex-col justify-start items-start">
        {sideNavLinks.map((navLink) => {
          return (
            <NavLink
              to={`/${navLink.id}`}
              key={navLink.id}
              className="flex justify-start items-center py-3 text-white"
            >
              <img src={navLink.img} alt={navLink.id} className="w-6 h-6" />
              <span className="pl-6">{navLink.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default SideNavBar;
