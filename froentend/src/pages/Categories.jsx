import React from 'react'

import UserTabs from '../components/UserTabs'
import Header from '../components/header'

const Categories = () => {
  return (
    <section className="min-h-screen bg-gray-50 p-4">
      <Header/>
      <UserTabs />
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <form className="flex flex-col space-y-6">
          
          {/* New Category Input */}
          <div>
            <label htmlFor="category-name" className="block text-lg font-semibold text-gray-700 mb-2">
              New Category Name
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                id="category-name"
                className="flex-1 bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg text-lg outline-none focus:ring-2 focus:ring-[#f13a01]"
                placeholder="Enter category name"
              />
              <button className="bg-[#f13a01] text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#d12e00] transition">
                Create
              </button>
              <button className="text-gray-700 font-semibold text-lg px-6 py-3 bg-gray-100 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 transition">
                Cancel
              </button>
            </div>
          </div>

          {/* Existing Categories */}
          <div>
            <label htmlFor="existing-category" className="block text-lg font-semibold text-gray-700 mb-2">
              Existing Categories
            </label>
            <div className="space-y-4 my-4">
              <div className="flex justify-between items-center bg-gray-100 border border-gray-300 px-6 py-3 rounded-lg shadow-md">
                <h3 className="font-medium text-lg text-gray-800">Pizza</h3>
                <div className="flex gap-3">
                  <button className="bg-[#f13a01] text-white font-semibold text-lg px-5 py-2 rounded-lg shadow-md hover:bg-[#d12e00] transition">
                    Edit
                  </button>
                  <button className="text-gray-700 font-semibold text-lg px-5 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex justify-between items-center bg-gray-100 border border-gray-300 px-6 py-3 rounded-lg shadow-md">
                <h3 className="font-medium text-lg text-gray-800">Pizza</h3>
                <div className="flex gap-3">
                  <button className="bg-[#f13a01] text-white font-semibold text-lg px-5 py-2 rounded-lg shadow-md hover:bg-[#d12e00] transition">
                    Edit
                  </button>
                  <button className="text-gray-700 font-semibold text-lg px-5 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <div className="flex justify-between items-center bg-gray-100 border border-gray-300 px-6 py-3 rounded-lg shadow-md">
                <h3 className="font-medium text-lg text-gray-800">Pizza</h3>
                <div className="flex gap-3">
                  <button className="bg-[#f13a01] text-white font-semibold text-lg px-5 py-2 rounded-lg shadow-md hover:bg-[#d12e00] transition">
                    Edit
                  </button>
                  <button className="text-gray-700 font-semibold text-lg px-5 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-md hover:bg-gray-200 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Categories
