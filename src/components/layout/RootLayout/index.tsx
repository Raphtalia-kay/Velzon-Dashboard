import { useState } from "react";
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

type Props = {
  children: React.ReactNode
}

const RootLayout: React.FC<Props>  = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => setCollapsed((c) => !c);
  return (
    <>
    {/* <Sidebar /> */}
    <div className="flex sticky bg-light-gray">
      <div className={`flex ${collapsed ? "w-[80px]" : "w-[300px]"}`}>
        <Sidebar collapsed={collapsed} />
      </div> 
     <div className="flex flex-col w-full">
      <div className={`flex  ${collapsed ? "w-full" : "w-full"}`}>
        <Navbar collapsed={collapsed} onToggle={toggleSidebar} />
      </div>
       <main className="">{children}</main>
     </div>
    </div>
    
   
     
    </>
  )
}

export default RootLayout 