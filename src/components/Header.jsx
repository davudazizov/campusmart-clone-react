import React from 'react'
import {useLocation, useNavigate }  from 'react-router-dom'
export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    //console.log("Current path:", location.pathname);
    //console.log("Match for /offers:", pathMatchRoute("/"));

    function pathMatchRoute(route){
      if (route === location.pathname){
        return true
      }
      return false
    }
  return (
    <div className="bg-white border-b shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center
      px-0 max-w-6xl mx-auto">
        <div>
          <img src="/CampusMartLogo.jpeg" alt="logo" 
          className="h-20 cursor-pointer "
          onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className= "flex space-x-10 cursor-pointer" >
            <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-4 
              ${pathMatchRoute("/") && "text-black border-b-red-500"}`}onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-4 
              ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/offers")} >Offers</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-4
              ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}onClick={()=>navigate("/sign-in")}>Sign in</li>
          </ul>
        </div>
      </header>

    </div>
  )
}
