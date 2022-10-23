// Sign In Page Menggunakan JWT

import { useState } from "react";
import ssobps from "../../assets/ssobps.png";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    window.location.href = "/beranda";
  };
  const usernameChange = (event) => {
    setUsername(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className={"min-w-screen min-h-screen flex justify-center items-center"}
    >
      <div
        className={"w-96 p-8 pt-6 pb-12 border-2 bg-white rounded-md shadow-md"}
      >
        <img src={ssobps} alt="logo" className={"w-full mx-auto pb-2 "} />
        <form onSubmit={submit}>
          <div className="flex flex-col my-2">
            <label className="mb-1" htmlFor="username">
              Username
            </label>
            <input
              className={
                "p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500 "
              }
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={usernameChange}
            />
          </div>

          <div className="flex flex-col my-2 ">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={passwordChange}
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded my-2 w-full">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
