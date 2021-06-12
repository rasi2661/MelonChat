import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerUser, user } from "../Modules/auth"

export default function Register() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const doRegister = () => {
    if(password != repeatPassword) {
      setShowAlert(true);
      setAlertText("Passwords don't match!");
    } else {
      registerUser(username,password,(ack: any) => {
        if(ack.err) {
          setShowAlert(true);
          setAlertText(ack.err);
        }
        console.log(ack)
      })
    }
  }

  useEffect(() => {
    if (user.is) {
       history.push("/");
    }
  }, []);

  return(
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">🍉 MelonChat</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            {showAlert &&
              <div className="bg-red-200 px-6 py-4 mx-2 mb-4 rounded-md text-lg flex items-center">
                <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3" >
                  <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"></path>
                </svg>
                <span className="text-red-800">{alertText}</span>
              </div>
            }
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
            <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={username} onChange={e => setUsername(e.target.value)} />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={password} onChange={e => setPassword(e.target.value)}/>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Repeat Password</label>
            <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
            <button onClick={doRegister} type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Register</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
          </div>
        </div>
        <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link to="/login">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span className="inline-block ml-1">Already have an account?</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
