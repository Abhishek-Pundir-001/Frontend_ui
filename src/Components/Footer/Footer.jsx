import profile from '../../assets/jack.png'

function Footer() {
    return (
        <div className="flex flex-col gap-2 mt-4 px-8 py-4">
            <div className="flex gap-5 items-center">
                <h1 className="text-xl font-bold ">Budget Status</h1>
                <button className="px-6 py-2.5 rounded-lg bg-green-600 text-white">Add new project</button>
                <button className="px-8 py-2 rounded-lg border-2 border-green-600 text-green-600">Download</button>
                <input type="date" className="px-8 py-2 rounded-lg border-2 border-green-600 text-green-600" />
                <button className="px-6 py-2 rounded-lg border-2 border-green-600 text-green-600">filter</button>
            </div>
            <div className='flex gap-5 items-center mt-4'>
                <div className="h-32 w-56 p-2 shadow-[0_0_5px_gray] rounded-sm">
                    <div className='flex justify-between mb-2'>
                        <div>
                            <h1 className='font-bold'>Insurance App</h1>
                            <p className='font-medium text-[#757575]'>veetri</p>
                        </div>
                        <img className='h-10 rounded-full' src={profile} alt="" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-[#8d8686]'>Total Budget</p>
                        <p className='text-[#554a4a]'>70000</p>
                        <p className='text-[#8d8686]'>Profitability</p>
                        <p className='text-[#554a4a]'>-25000</p>
                    </div>
                </div>
                <div className="h-32 w-56 p-2 shadow-[0_0_5px_gray] rounded-sm">
                    <div className='flex justify-between mb-2'>
                        <div>
                            <h1 className='font-bold'>Insurance App</h1>
                            <p className='font-medium text-[#757575]'>veetri</p>
                        </div>
                        <img className='h-10 rounded-full' src={profile} alt="" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-[#8d8686]'>Total Budget</p>
                        <p className='text-[#554a4a]'>70000</p>
                        <p className='text-[#8d8686]'>Profitability</p>
                        <p className='text-[#554a4a]'>-25000</p>
                    </div>
                </div>
                <div className="h-32 w-56 p-2 shadow-[0_0_5px_gray] rounded-sm">
                    <div className='flex justify-between mb-2'>
                        <div>
                            <h1 className='font-bold'>Insurance App</h1>
                            <p className='font-medium text-[#757575]'>veetri</p>
                        </div>
                        <img className='h-10 rounded-full' src={profile} alt="" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-[#8d8686]'>Total Budget</p>
                        <p className='text-[#554a4a]'>70000</p>
                        <p className='text-[#8d8686]'>Profitability</p>
                        <p className='text-[#554a4a]'>-25000</p>
                    </div>
                </div>
                <div className="h-32 w-56 p-2 shadow-[0_0_5px_gray] rounded-sm">
                    <div className='flex justify-between mb-2'>
                        <div>
                            <h1 className='font-bold'>Insurance App</h1>
                            <p className='font-medium text-[#757575]'>veetri</p>
                        </div>
                        <img className='h-10 rounded-full' src={profile} alt="" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-[#8d8686]'>Total Budget</p>
                        <p className='text-[#554a4a]'>70000</p>
                        <p className='text-[#8d8686]'>Profitability</p>
                        <p className='text-[#554a4a]'>-25000</p>
                    </div>
                </div>
                <div className="h-32 w-56 p-2 shadow-[0_0_5px_gray] rounded-sm">
                    <div className='flex justify-between mb-2'>
                        <div>
                            <h1 className='font-bold'>Insurance App</h1>
                            <p className='font-medium text-[#757575]'>veetri</p>
                        </div>
                        <img className='h-10 rounded-full' src={profile} alt="" />
                    </div>
                    <div className='grid grid-cols-2'>
                        <p className='text-[#8d8686]'>Total Budget</p>
                        <p className='text-[#554a4a]'>70000</p>
                        <p className='text-[#8d8686]'>Profitability</p>
                        <p className='text-[#554a4a]'>-25000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer