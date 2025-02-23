import { FaRegBell } from "react-icons/fa";
import profile from '../../assets/jack.png'
import { useState } from "react";
function Navbar() {
    const [links,setLinks] = useState('Dashboard')
    return (
        <div className="flex justify-between items-end py-4 px-8 bg-green-800">
            <h1 className="text-2xl font-medium text-white font-sans"><span className="text-cyan-400">H</span>OURS</h1>
            <ul className="flex gap-5 list-none text-stone-50 text-lg">
                <li onClick={()=>setLinks('Dashboard')} className={`${links === "Dashboard"? `underline`:''} cursor-pointer`}>Dashboard</li>
                <li onClick={()=>setLinks('Projects')} className={`${links === "Projects"? `underline`:''} cursor-pointer`}>Projects</li>
                <li onClick={()=>setLinks('Team')} className={`${links === "Team"? `underline`:''} cursor-pointer`}>Team</li>
                <li onClick={()=>setLinks('Client')} className={`${links === "Client"? `underline`:''} cursor-pointer`}>Client</li>
                <li onClick={()=>setLinks('Time')} className={`${links === "Time"? `underline`:''} cursor-pointer`}>Time</li>
                <li onClick={()=>setLinks('Reports')} className={`${links === "Reports"? `underline`:''} cursor-pointer`}>Reports</li>
            </ul>
            <div className="flex gap-2.5 items-center relative">
                <span className="h-1 w-1.5 bg-red-600 absolute top-1 left-4 rounded-full"></span>
                <FaRegBell className="text-white" size={25}/>
                <img className='rounded-full h-8' src={profile} />
                <select name="" id=""  className="text-white">
                    <option value="Mario">Mario</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar