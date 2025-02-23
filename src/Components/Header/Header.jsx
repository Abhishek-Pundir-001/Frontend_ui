import { MdPersonOutline } from "react-icons/md";

import { TiWarningOutline } from "react-icons/ti";

import menu from '../../assets/menu.png'
import right from '../../assets/right.png'
import ongoing from '../../assets/processing-time.png'
import graph1 from '../../assets/graph1.png'
import circle from '../../assets/circle.png'
import profile from '../../assets/jack.png'
import happy1 from '../../assets/happy.png'





function Header() {
    return (
        <div className="flex pr-16 justify-between">
            <div className="w-[70%]  h-[60vh] mt-2 px-8 py-4">
                <div className="flex justify-between">
                    <div className="h-28 w-36 p-2 shadow-[0_0_5px_gray] rounded-sm">
                        <img src={menu} className="h-5" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-4xl font-extrabold">5</h1>
                            <p className="font-medium text-[#767676]">Total Projects</p>
                        </div>
                    </div>
                    <div className="h-28 w-36 p-2 shadow-[0_0_5px_gray] rounded-sm">
                        <img src={right} className="h-5" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-4xl font-extrabold">1</h1>
                            <p className="font-medium text-[#767676]">Completed</p>
                        </div>
                    </div>
                    <div className="h-28 w-36 p-2 shadow-[0_0_5px_gray] rounded-sm">
                        <img src={ongoing} className="h-5" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-4xl font-extrabold">3</h1>
                            <p className="font-medium text-[#767676]">ongoing</p>
                        </div>
                    </div>
                    <div className="h-28 w-36 p-2 shadow-[0_0_5px_gray] rounded-sm bg-red-400">
                        <TiWarningOutline size={22} className="text-cyan-500" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-4xl font-extrabold text-white">1</h1>
                            <p className="font-medium text-white">Delaying</p>
                        </div>
                    </div>
                    <div className="h-28 w-36 p-2 shadow-[0_0_5px_gray] rounded-sm">
                        <MdPersonOutline size={22} className="text-cyan-500" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-4xl font-extrabold">5</h1>
                            <p className="font-medium text-[#767676]">Employees</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center h-[50vh] mt-8">
                    <div className="chart-1 w-[50%] shadow-[0_0_5px_gray]">
                        <img src={graph1} alt="" />

                    </div>
                    <div className="" >
                        <img className="h-[40vh]" src={circle} alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[70vh] flex flex-col gap-3.5 justify-evenly bg-white w-52 mt-5 rounded-lg px-2.5 py-4 shadow-[0_0_5px_gray">
                <h1 className="font-medium text-[#767676]">Team Mood</h1>
                <div className="w-full">
                    <div className="flex items-center gap-1.5">
                        <img className="h-10 rounded-full" src={profile} alt="" />
                        <div>
                            <p className="font-bold text-[#767676]">James</p>
                            <p className="font-medium text-xs text-[#959292]">UI/Ux Junior</p>

                        </div>

                    </div>
                    <div className="border-0 h-0.5 w-full bg-gray-500 relative mt-2.5">
                       <img src={happy1} className="absolute h-6 top-[-12px] left-12 rounded-full"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-1.5">
                        <img className="h-10 rounded-full" src={profile} alt="" />
                        <div>
                            <p className="font-bold text-[#767676]">James</p>
                            <p className="font-medium text-xs text-[#959292]">UI/Ux Junior</p>

                        </div>

                    </div>
                    <div className="border-0 h-0.5 w-full bg-gray-500 relative mt-2.5">
                       <img src={happy1} className="absolute h-6 top-[-12px] left-12 rounded-full"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-1.5">
                        <img className="h-10 rounded-full" src={profile} alt="" />
                        <div>
                            <p className="font-bold text-[#767676]">James</p>
                            <p className="font-medium text-xs text-[#959292]">UI/Ux Junior</p>

                        </div>

                    </div>
                    <div className="border-0 h-0.5 w-full bg-gray-500 relative mt-2.5">
                       <img src={happy1} className="absolute h-6 top-[-12px] left-12 rounded-full"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-1.5">
                        <img className="h-10 rounded-full" src={profile} alt="" />
                        <div>
                            <p className="font-bold text-[#767676]">James</p>
                            <p className="font-medium text-xs text-[#959292]">UI/Ux Junior</p>

                        </div>

                    </div>
                    <div className="border-0 h-0.5 w-full bg-gray-500 relative mt-2.5">
                       <img src={happy1} className="absolute h-6 top-[-12px] left-12 rounded-full"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center gap-1.5">
                        <img className="h-10 rounded-full" src={profile} alt="" />
                        <div>
                            <p className="font-bold text-[#767676]">James</p>
                            <p className="font-medium text-xs text-[#959292]">UI/Ux Junior</p>

                        </div>

                    </div>
                    <div className="border-0 h-0.5 w-full bg-gray-500 relative mt-2.5">
                       <img src={happy1} className="absolute h-6 top-[-12px] left-12 rounded-full"/>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header;
