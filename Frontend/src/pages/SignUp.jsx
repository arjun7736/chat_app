import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <form>
       <div className=" container bg-black h-screen w-screen flex items-center justify-center">
      <div className=" container flex flex-col items-center justify-center h-3/4 w-96 bg-white rounded-3xl">
        <h1 className="text-3xl font-bold text-slate-500  mb-10">Chat App</h1>
        <input type="text" name='username' id='username' className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3 "placeholder="Enter Username . . ." />
        <input type="number" name='phone' id='phone' className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3" placeholder="Enter Number . . ."/>
        <input type="password" name='password' id='password' className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3" placeholder="Enter Password . . ."/>
        <Button className="uppercase m-3 w-[9.75rem]">Sign Up</Button>
        <p className="mt-3 text-sm text-gray-400">or</p>
        <Link to={"/login"}>
        <Button variant="outline" className="w-[9.75rem] uppercase mt-3">Login</Button>
        </Link>
      </div>
    </div>
    </form>
  )
}

export default SignUp