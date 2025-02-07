import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { restaurantPickerApi } from "../services/services";


const RestaurantPickerComponent = () => {
    const [userInput, setUserInput] = useState("");
    const [greeting, setGreeting] = useState("I'm hungry, let's pick a category to eat at!");
  
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        try {
          const response = await restaurantPickerApi(userInput);
          setGreeting(response);
          setUserInput("");
        } catch (error) {
          console.error("Error fetching greeting:", error);
        }
      }
    };




    return (
       <div className="bg-[url(/src/assets/Game10Background.jpg)] h-screen bg-cover bg-no-repeat bg-center">
               <div className="place-items-center">
                 <div className="flex justify-center md:w-[50%] w-[80%]">
                   <div className="bg-[#9385D0] text-3xl place-content-center max-[460px]:h-48 sm:h-[160px] w-full text-center rounded-2xl mt-[20px] text-white">
                     {greeting}
                   </div>
                 </div>

                <div className="mt-[350px]">
                 <h1 className="bg-[#9385D0] text-white text-3xl md:h-[80px] sm:h-[120px] md:w-96  w-64 text-center rounded-[7px]">Do you want fast food, dine in, or surprise me?</h1>
                 <input 
                   className="mt-3 bg-[#9385D0] text-2xl h-10 md:w-96 w-64 rounded-[7px] text-white placeholder:text-white"
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

export default RestaurantPickerComponent;