import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios
    //   .post()
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
  };

  return (
    <form onClick={handleSubmit}>
      <div className=" container bg-black h-screen w-screen flex items-center justify-center">
        <div className=" container flex flex-col items-center justify-center h-3/4 w-96 bg-white rounded-3xl">
          <h1 className="text-3xl font-bold text-slate-500  mb-10">Chat App</h1>
          <input
            type="text"
            className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3 "
            id="username"
            name="username"
            placeholder="Enter Username . . ."
            onChange={handleChange}
          />
          <input
            type="password"
            className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3"
            id="password"
            name="password"
            placeholder="Enter Password . . ."
            onChange={handleChange}
          />
          <Button className="uppercase m-5 w-[9.75rem]">Login</Button>
          <p className="mt-3 text-sm text-gray-400">or</p>
          <Link to={"/SignUp"}>
            <Button
              type="submit"
              variant="outline"
              className="w-[9.75rem] uppercase mt-5"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
