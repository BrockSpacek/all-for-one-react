import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { sayHelloApi } from "../services/services";


const SayHelloComponent = () => {
    const [userInput, setUserInput] = useState("");
    const [greeting, setGreeting] = useState("What is your name young Hero?");
  
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        try {
          const response = await sayHelloApi(userInput);
          setGreeting(response);
          setUserInput("");
        } catch (error) {
          console.error("Error fetching greeting:", error);
        }
      }
    };
  
    return (
      <div className="bg-[url(src/assets/game1background.png)] h-screen bg-cover bg-no-repeat bg-center">
        <div className="place-items-center">
          <div className="flex justify-center md:w-[50%] w-[80%]">
            <div className="bg-red-400 text-3xl place-content-center h-[80px] w-full text-center rounded-2xl mt-[20px]">
              {greeting}
            </div>
          </div>
  
          <input 
            className="mt-[500px] bg-white text-2xl h-10 md:w-96 w-64 rounded-[7px]"
            placeholder="Name"
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />
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

export default SayHelloComponent;
