import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { addNumbersApi } from "../services/services";
import { Button } from "flowbite-react";

const AddTwoNumbersComponent = () => {


    const [userInput, setUserInput] = useState("");
    const [display, setDisplay] = useState("");
  
    const displayText = () => {
      setDisplay(userInput);
    };
  
    return (
      <div className="bg-[url(src/assets/Game2Background.jpg)] h-screen bg-cover bg-no-repeat bg-center">
        <div className="place-items-center">
          <div className="flex justify-center md:w-[50%] w-[80%]">
            <div className="bg-[#35BED7] text-3xl place-content-center h-[80px] w-full text-center rounded-2xl mt-[20px] text-white">
              {" "}
              Let's add numbers... or explosions
            </div>
          </div>
  
          <Button onClick={displayText}> Display Text </Button>
          {display.length != 0 && <div className=""> {display} </div>}
  
  
        <input 
            className="mt-[500px]  text-2xl h-10 w-40 sm:w-52 lg:w-64 rounded-[7px] bg-[#35BED7] mr-2" placeholder="Enter Num"
            type="text"
            onChange={(event) => setUserInput(event.target.value)}
        />

        <input 
            className=" text-2xl h-10 w-40 sm:w-52 lg:w-64 rounded-[7px] bg-[#35BED7] ml-2" placeholder="Enter Num 2"
            type="text"
            onChange={(event) => setUserInput(event.target.value)}
        />
        </div>

        <div className="lg:mr-[5%] flex lg:justify-end justify-center">
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


   

export default AddTwoNumbersComponent;