import avatar from "../../../assets/common/avatar-1.jpg";
import MenuPart from "./MenuPart";
import { LogoDark } from "../../../assets/common";
import PagePart from "./PagePart";
import ComponentsPart from "./ComponentsPart";

const Sidebar: React.FC = () => {
  return (
    <div className={`bg-white px-[8px] h-screen overflow-y-auto scroll-auto w-[300px] flex flex-col items-center `}>
      <div className="py-[30px] flex justify-center w-[300px]">
        <img className="w-[100px]" src={LogoDark} alt="" />
      </div>
      <div className="flex bg-light-gray w-full rounded-[4px] py-[20px]  px-[30px] items-center gap-[10px]">
        <div>
          <img className="w-[50px] rounded-[2px]" src={avatar} alt="" />
        </div>
        <div>
          <h2 className="tracking-wider">Raphtalia K</h2>
          <div className="flex items-center gap-[6px]">
            <span className="bg-green-500 w-[10px] h-[10px] rounded-full"></span>
            <p className="tracking-wider leading-relaxed text-[16px] text-gray">Online</p>
          </div>
        </div>
      </div>

      <MenuPart />
      <PagePart/>
      <ComponentsPart/>

      

    </div>
  );
};

export default Sidebar;
