import { bell, msg } from '../../assets';
import { profileInfo } from '../../utils';
const NavBar = () => {
  return (
    <div className="w-full h-16 bg-darkblue text-white flex flex-row justify-between items-center p-4">
      <div>
        <h2>Welcom Back {profileInfo.name}</h2>
      </div>
      <div className="flex justify-center items-center gap-4">
        <span>
          <img src={msg} alt="msg" className="w-6 h-6 cursor-pointer" />
        </span>
        <span>
          <img src={bell} alt="bell" className="w-6 h-6 cursor-pointer" />
        </span>
        <span className="flex justify-center items-center gap-2">
          <img
            src={profileInfo.profileImg}
            alt="proflie-pic"
            className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
};
export default NavBar;
