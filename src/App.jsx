import React from 'react'

const App = () => {
  return (
    <div className='flex items-center md:h-screen justify-center bg-[#151515] md:flex-row flex-col'>
      <div className='w-full bg-[#141414] md:w-1/2 p-4 flex items-center justify-center'>
      <table className='w-full text-white font-semibold'>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">S.no</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">Name</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">Dept</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">College</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">Reg No</td>
                </tr>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">1</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">ABC</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">CSE</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">HICET</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">33</td>
                </tr>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">2</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">ASD</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">MECH</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">HICET</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">18</td>
                </tr>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">3</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">GHJ</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">CIVIL</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">HICET</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">45</td>
                </tr>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">4</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">RTY</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">IT</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">HITECH</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">12</td>
                </tr>
                <tr
                  className=" rounded-md odd:bg-[#121212] even:bg-[#191919] text-[10px] sm:text-[13px] md:text-[16px] font-semibold"
                >
                  <td className="p-2 text-[7px] md:text-[12px]  md:pr-8 ">5</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">IUY</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">CSE</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">HITECH</td>
                  <td className="p-2 text-[7px] md:text-[12px] md:pr-8 ">93</td>
                </tr>
          </table>
</div>
      <div className='w-full h-screen bg-translucent flex items-center justify-center md:w-1/2 card -z-0'>
      <form action="">
          <div class="mt-5">
            <label for="username">Username or Email</label>
            <input
              type="text"
              id="username"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div class="mt-5">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="block w-full p-2 border rounded border-gray-500"
            />
          </div>
          <div class="mt-10">
            <button
              class="p-1 font-semibold cursor-pointer bg-[#333] rounded text-white text-center w-full"
            >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App