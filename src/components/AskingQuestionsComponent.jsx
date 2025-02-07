import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { askQuestionsApi } from "../services/services";

const AskingQuestionsComponent = () => {
    const [yourName, setYourName] = useState("");
    const [timeYouWokeUp, setTimeYouWokeUp] = useState("");
    const [result, setResult] = useState("I need to ask you two questions");

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
          try {
            
            if (yourName && timeYouWokeUp) {
              const response = await askQuestionsApi(yourName, timeYouWokeUp);
              setResult(response);
              
              setTimeYouWokeUp("");
              setYourName("");
            }
          } catch (error) {
            console.error("Error adding numbers:", error);
          }
        }
      };


    return (
        <div className="bg-[url(/src/assets/Game3Image.jpg)] h-screen bg-cover bg-no-repeat bg-center">
               <div className="place-items-center">
                 <div className="flex justify-center md:w-[50%] w-[80%]">
                   <div className="bg-[#35BED7] text-3xl place-content-center sm:h-[80px] h-[110px] w-full text-center rounded-2xl mt-[20px] text-white">
                     {result}
                   </div>
                 </div>

                 <div className="gap-4 lg:mt-[450px] mt-[300px] grid grid-cols-6 grid-rows-2">
                     <h1 class="bg-[#35BED7] text-white text-3xl lg:h-[40px] sm:h-[80px] w-full text-center rounded-[7px] col-start-2 col-span-2 row-start-1">What is your name?</h1>
                     <h1 class="bg-[#35BED7] text-white text-3xl lg:h-[40px] sm:h-[80px] w-full text-center rounded-[7px] col-start-4 col-span-2 row-start-1">What time did you awaken?</h1>
                   <input 
                     className="col-start-2 col-span-2 row-start-2 text-2xl h-10 w-full rounded-[7px] bg-[#35BED7] text-white placeholder-white"
                     placeholder="Name"
                     type="text"
                     value={yourName}
                     onChange={(event) => setYourName(event.target.value)}
                     onKeyDown={handleKeyDown}
                   />
         
                   <input 
                     className="col-start-4 col-span-2 row-start-2 text-2xl h-10 w-full rounded-[7px] bg-[#35BED7] text-white placeholder-white"
                     placeholder="Time"
                     type="text"
                     value={timeYouWokeUp}
                     onChange={(event) => setTimeYouWokeUp(event.target.value)}
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
           );
         };
    


export default AskingQuestionsComponent;