import React from 'react'
import Header from '../components/header'
import UserTabs from '../components/UserTabs'

const MenuItems = () => {
  return (
    <section className='min-h-screen bg-gray-50 p-4'>
        <Header/>
        <UserTabs/>

        <div className='bg-white max-w-3xl border border-gray-200 shadow-md p-6 mx-auto' >
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col items-center justify-center space-y-5 md-w-1/3'>
                      <div className='w-52 h-52 overflow-hidden border-2 border-gray-200 rounded-full'>
                        <img src="profile_img.jpeg" alt="menu" className='h-full w-full object-cover'/>
                      </div>  
                      <button className='bg-gray-100 text-gray-500 border px-8 py-2 rounded-lg border-gray-300'>
                        Change Image
                      </button>
                </div>

                <div>
                <form className="flex-1 space-y-4 w-full">
                    <div className="w-full">
                        <label htmlFor="itemname" className="font-medium text-gray-700 block mb-1">Item name</label>
                        <input 
                        type="text" 
                        className="w-full bg-gray-100 rounded-lg border border-gray-300 h-11 p-4 focus:ring-1 focus:outline-none focus:border-[#f13a01] focus:ring-[#f13a01] shadow-sm"
                        />
                    </div>
                </form>

                </div>
            </div>


        </div>

    </section>
  )
}

export default MenuItems