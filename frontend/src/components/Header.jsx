import { Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className=" h-[4em] p-[0.8em] px-8 flex flex-row justify-between ">
        <div className="text-white text-3xl p-2 flex justify-center items-center">
            <p>uniflux</p>
        </div>
        <div className="bg-white text-xl p-2 my-2 w-24 h-8 flex justify-center items-center rounded-xl font-medium text-[#103133]">
           <Link to={'/login'}><Button>Login</Button></Link>
        </div>
    </header>
  )
}

export default Header