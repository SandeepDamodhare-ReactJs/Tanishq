import React from 'react'

const Sidebar = () => {
  return (

<>
<nav class="bg-white shadow-lg  h-screen  top-0 left-0 w-[200px] py-6 px-4 font-[sans-serif] overflow-auto">
      <ul>
        <li>
          <a href="javascript:void(0)"
            class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
            Dashboard
          </a>
        </li>
      </ul>

      <div class="mt-4">
        <h6 class="text-blue-600 text-sm font-bold px-4">Information</h6>
        <ul class="mt-2">
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Audience
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Posts
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Schedules
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Promote
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <h6 class="text-blue-600 text-sm font-bold px-4">Income</h6>
        <ul class="mt-2">
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Earnings and taxes
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Refunds
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Declines
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Payouts Details
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-4">
        <h6 class="text-blue-600 text-sm font-bold px-4">Actions</h6>
        <ul class="mt-2">
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Profile
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              class="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
</>)
}

export default Sidebar