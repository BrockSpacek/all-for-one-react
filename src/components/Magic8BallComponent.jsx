import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { magicEightApi } from "../services/services";


const Magic8BallComponent = () => {
    const [userInput, setUserInput] = useState("");
    const [greeting, setGreeting] = useState("Ask any yes or no question, my shadow will answer");
  
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        try {
          const response = await magicEightApi(userInput);
          setGreeting(response);
          setUserInput("");
        } catch (error) {
          console.error("Error fetching greeting:", error);
        }
      }
    };




    return (
       <div className="bg-[url(src/assets/Game9Background.png)] h-screen bg-cover bg-no-repeat bg-center">
               <div className="place-items-center">
                 <div className="flex justify-center md:w-[50%] w-[80%]">
                   <div className="bg-[#B85C00] text-3xl place-content-center max-[460px]:h-32 sm:h-[80px] w-full text-center rounded-2xl mt-[20px] text-white">
                     {greeting}
                   </div>
                 </div>

                <div className="mt-[450px]">
                 <h1 className="bg-[#B85C00] text-white text-3xl md:h-[40px] sm:h-[80px] md:w-96  w-64 text-center rounded-[7px]">Enter your questions here!</h1>
                 <input 
                   className="mt-3 bg-[#B85C00] text-2xl h-10 md:w-96 w-64 rounded-[7px] text-white placeholder:text-white"
                   placeholder=""
                   type="text"
                   value={userInput}
                   onChange={(event) => setUserInput(event.target.value)}
                   onKeyDown={handleKeyDown}
                 />
               </div>
               </div>
       
           <div className="lg:mr-[2%] flex lg:justify-end justify-center">
                   <Link
                     to="/"
                     className="grid grid-cols-1 grid-rows-1 place-items-center"
                   >
                     <img
                       className="h-auto max-w-xs ms-auto hover:opacity-70 col-start-6 row-start-5"
                       src={HomeImage}
                       alt="Splash button"
                     />
                     <h2 className="text-4xl text-white col-start-6 row-start-5 text-center place-items-center">
                       Main Menu
                     </h2>
                   </Link>
                 </div>
           </div>
    )
}

export default Magic8BallComponent;