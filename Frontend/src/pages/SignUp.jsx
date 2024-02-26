import { Button } from "@/components/ui/button";
import { signupUserFail, signupUserStart, signupUserSuccess } from "@/redux/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const {loading,error,userData}=useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    dispatch(signupUserStart());
    e.preventDefault();
    await axios
      .post("/api/user/signup", formData)
      .then((data) => {
        dispatch(signupUserSuccess(data.data));
        navigate("/")
      })
      .catch((error) => {
        dispatch(signupUserFail(error?.response?.data))
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" container bg-black h-screen w-screen flex items-center justify-center">
        <div className=" container flex flex-col items-center justify-center h-3/4 w-96 bg-white rounded-3xl">
          <h1 className="text-3xl font-bold text-slate-500  mb-10">Chat App</h1>
          {error && error ?<p className="text-red-500">{error.message}</p>:""}
          <input
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3 "
            placeholder="Enter Username . . ."
          />
          <input
            onChange={handleChange}
            type="number"
            name="phone"
            id="phone"
            className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3"
            placeholder="Enter Number . . ."
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            className="border-b-2 m-5 w-56 h-10 focus:outline-none px-3"
            placeholder="Enter Password . . ."
          />
          <Button className="uppercase m-3 w-[9.75rem]" type="submit">
          {loading ? (
                <RotatingLines
                  visible={true}
                  height="24"
                  width="24"
                  color="grey"
                  strokeWidth="3"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              ) : (
                "Sign Up"
              )}{" "}
          </Button>
          <p className="mt-3 text-sm text-gray-400">or</p>
          <Link to={"/login"}>
            <Button
              variant="outline"
              className="w-[9.75rem] uppercase mt-3"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
