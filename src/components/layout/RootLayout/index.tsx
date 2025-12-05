import { useState } from "react";
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"


const RootLayout: React.FC  = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => setCollapsed((c) => !c);
  return (
    <>
    {/* <Sidebar /> */}
    <div className="flex bg-light-gray ">
      <div className={`flex ${collapsed ? "w-[80px]" : "w-[300px]"}`}>
        <Sidebar collapsed={collapsed} />
      </div> 
      <div className={` ${collapsed ? "w-[calc(100%-80px)]" : "w-[calc(100%-300px)]"}`}>
        <Navbar collapsed={collapsed} onToggle={toggleSidebar} />
      </div>
    </div>
   
    </>
  )
}

export default RootLayout 