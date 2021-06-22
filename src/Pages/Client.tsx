import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { user } from "../Modules/auth";

export default function Client() {
  const history = useHistory();

  const doLogout = () => {
    user.leave();
    history.push("/login");
  }

  return(
    <div className="flex h-screen antialiased text-gray-800">
       <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
             <div className="flex flex-row items-center justify-center h-12 w-full">
                <div className="ml-2 font-bold text-2xl"> 🍉 MelonChat</div>
             </div>
             <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-3 px-4 rounded-lg">
                <div className="text-sm font-semibold">Logged in as: John Doe</div>
             </div>
             <div className="flex flex-col mt-8">
                <div className="flex flex-row items-center justify-between text-xs">
                  <span className="font-bold">Active Conversations</span>
                  <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">+</span>
                </div>
                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
                   <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"> J </div>
                      <div className="ml-2 text-sm font-semibold">John Doe</div>
                   </button>
                </div>
             </div>
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
             <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                   <div className="flex flex-col h-full">
                      <div className="grid grid-cols-12 gap-y-2">
                         <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"> J </div>
                               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                  <div>LoremIpsum</div>
                               </div>
                            </div>
                         </div>
                         <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"> J </div>
                               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                  <div> LoremIpsum </div>
                               </div>
                            </div>
                         </div>
                         <div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"> J </div>
                               <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                  <div>LoremIpsum</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                   <div className="flex-grow">
                      <div className="relative w-full">
                         <input type="text" className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                         <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                         </button>
                      </div>
                   </div>
                   <div className="ml-4">
                      <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                         <span>Send</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
