import { useState } from "react";
import {  pages, type PageItem } from "./data";

interface SidebarProps {
  collapsed: boolean;
}

const PagePart: React.FC<SidebarProps> = ({ collapsed }) => {
  const [openID, setOpenID] = useState<number | null>(0);

  return (
    <div className="flex flex-col  w-full rounded-[4px]  py-[20px] px-[30px]  gap-[10px]">
      <div className="py-[4px]">
        <h3 className={`text-[18px]  tracking-normal leading-normal text-gray ${collapsed ? "hidden" : ""} `}>
          Pages
        </h3>
        <div className="flex flex-col flex-wrap gap-[8px] w-full ">
          {pages.map((item: PageItem) => (
            <div className="" key={item.id}>
              <button
                onClick={() => setOpenID(openID === item.id ? null : item.id)}
                className={`flex  w-full flex-row justify-between gap-[10px] hover:text-purple items-center py-[8px] ${openID === item.id ? "text-purple" : "text-black"}`}
              >
                <div className="flex flex-row gap-[14px] items-center">
                  <item.icon className="w-[16px]" />
                   <p className={`tracking-wider leading-relaxed text-[18px] font-normal ${collapsed ? "hidden" : ""}`}>{item.name}</p>
                </div>
                <item.arrow
                  className={`transition-transform w-[16px]  ${collapsed ? "hidden" : ""} ${openID === item.id ? "rotate-180" : ""}`}
                />
              </button>
              {openID === item.id && item.subItems && (
                <div className="">
                  {item.subItems?.map((i) => (
                    <div
                      key={i.id}
                      className="flex justify-between items-center w-full px-[10px] group  gap-[20px] py-[10px]  "
                    >
                      <div className="flex flex-row  gap-[10px] items-center">
                        <span className="group-hover:text-purple text-[17px] tracking-wider leading-relaxed font-medium text-gray transition-all cursor-pointer">
                        –
                      </span>
                      <p className="text-[17px] group-hover:text-purple  tracking-wider leading-relaxed font-medium  text-gray transition-all cursor-pointer">
                        {i.label}
                      </p>
                      </div>
                      {i.badge && (
                        <span className="text-[14px] bg-green rounded-[4px] text-white px-[10px] py-[2px] tracking-wider leading-relaxed font-medium ">
                        {i.badge}
                      </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PagePart;
