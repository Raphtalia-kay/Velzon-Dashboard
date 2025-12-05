import avatar from "../../../assets/common/avatar-1.jpg";
import MenuPart from "./MenuPart";
import { LogoDark, LogoSm } from "../../../assets/common";
import PagePart from "./PagePart";
import ComponentsPart from "./ComponentsPart";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <div className={`bg-white px-[8px] h-screen overflow-y-auto scroll-auto  flex flex-col items-center ${collapsed ? "w-[80px]" : "w-[300px]"} `}>
      <div className={` flex justify-center ${collapsed ? "w-[80px] py-[20px]" : "w-[300px] py-[30px]"} `}>
        {collapsed ? (
          <img className="w-[30px]" src={LogoSm} alt="" />
        ) : (
          <img className="w-[100px]" src={LogoDark} alt="" />
        )}
      </div>
      <div className={`flex bg-light-gray w-full rounded-[4px]  items-center  gap-[10px] ${collapsed ? " justify-center py-[8px]  px-[8px]" : "py-[20px]  px-[30px]"}`}>
        <div>
          <img className={` rounded-[2px] ${collapsed ? "w-[40px]" : "w-[50px]"}`} src={avatar} alt="" />
        </div>
        <div className={`flex flex-col ${collapsed ? "hidden" : ""}`}>
          <h2 className="tracking-wider">Raphtalia K</h2>
          <div className="flex items-center gap-[6px]">
            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
            <p className="tracking-wider leading-relaxed text-[16px] text-gray">Online</p>
          </div>
        </div>
      </div>

      <MenuPart collapsed={collapsed} />
      <PagePart collapsed={collapsed} />
      <ComponentsPart collapsed={collapsed} />

      

    </div>
  );
};

export default Sidebar;
