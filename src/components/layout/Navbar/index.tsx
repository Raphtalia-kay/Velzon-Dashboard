import {
  Bell,
  Handbag,
  LayoutDashboard,
  Menu,
  Moon,
  MoveRight,
  Scan,
  Search,
} from "lucide-react";
import { AmericanFlag } from "../../../assets/common";

interface NavbarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed, onToggle }) => {
  return (
    <>
      <section className="bg-white w-full justify-between  flex px-[20px] gap-[10px] items-center h-[70px]">
        <div className="flex gap-[10px] items-center">
          {collapsed ? (
            <MoveRight onClick={onToggle} className="w-[25px] h-[25px] text-gray overflow-hidden" />
          ) : (
            <Menu onClick={onToggle} />
          )}

          <div className="w-[250px] h-[40px]  rounded-[4px]  flex items-center gap-[8px] px-[10px]  bg-light-gray">
            <Search className="w-[20px] h-[20px] text-gray overflow-hidden" />
            <input
              type="search"
              className="placeholder:text-gray placeholder:text-[18px] w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:font-normal placeholder:tracking-normal placeholder:leading-relaxed"
              placeholder="Search ... "
            />
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex justify-center items-center">
            <img
              className="w-[25px] h-[25px] rounded-full  overflow-hidden"
              src={AmericanFlag}
              alt=""
            />
          </div>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex justify-center items-center">
            <LayoutDashboard className="w-[25px] h-[25px]  text-gray overflow-hidden" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex justify-center items-center relative">
            <Handbag className="w-[25px] h-[25px] text-gray overflow-hidden relative" />
            <div className="bg-green h-[20px] w-[20px] rounded-full flex justify-center items-center text-[12px] absolute top-[-7px] right-[4px]">
              5
            </div>
          </div>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex justify-center items-center">
            <Scan className="w-[25px] h-[25px] text-gray overflow-hidden" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex justify-center items-center">
            <Moon className="w-[25px] h-[25px] text-gray overflow-hidden" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full hover:bg-skyblue/20 flex relative justify-center items-center">
            <Bell className="w-[25px] h-[25px] text-gray overflow-hidden relative" />
            <div className="bg-red-500 h-[20px] w-[20px] rounded-full flex justify-center items-center text-[12px] absolute top-[-7px] right-[4px]">
              3
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
