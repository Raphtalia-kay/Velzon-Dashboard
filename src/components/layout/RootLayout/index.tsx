import Navbar from "../Navbar"
import Sidebar from "../Sidebar"


const RootLayout = () => {
  return (
    <>
    {/* <Sidebar /> */}
    <div className="flex bg-light-gray ">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-300px)]">
        <Navbar />
      </div>
    </div>
   
    </>
  )
}

export default RootLayout 