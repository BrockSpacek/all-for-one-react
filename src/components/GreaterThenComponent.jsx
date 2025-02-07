import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { greaterOrLessApi } from "../services/services";


const GreaterThenComponent = () => {
    const [numberOne, setnumberOne] = useState("");
    const [numberTwo, setnumberTwo] = useState("");
    const [result, setResult] = useState("Let's quickly compare two numbers");
  
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        try {
          
          if (numberOne && numberTwo) {
            const response = await greaterOrLessApi(numberOne, numberTwo);
            setResult(response);
            
            setnumberOne("");
            setnumberTwo("");
          }
        } catch (error) {
          console.error("Error adding numbers:", error);
        }
      }
    };
  
    return (
      <div className="bg-[url(/src/assets/Game5Background.jpg)] h-screen bg-cover bg-no-repeat bg-center">
        <div className="place-items-center">
          <div className="flex justify-center md:w-[50%] w-[80%]">
            <div className="bg-[#178E1F] text-3xl place-content-center sm:h-[80px] h-[110px] w-full text-center rounded-2xl mt-[20px] text-white">
              {result}
            </div>
          </div>
  
          <div className="flex justify-center gap-4">
            <input 
              className="mt-[500px] text-2xl h-10 w-[40%] sm:w-52 lg:w-64 rounded-[7px] bg-[#178E1F] text-white placeholder-white"
              placeholder="Enter Num"
              type="text"
              value={numberOne}
              onChange={(event) => setnumberOne(event.target.value)}
              onKeyDown={handleKeyDown}
            />
  
            <input 
              className="mt-[500px] text-2xl h-10 w-[40%] sm:w-52 lg:w-64 rounded-[7px] bg-[#178E1F] text-white placeholder-white"
              placeholder="Enter Num 2"
              type="text"
              value={numberTwo}
              onChange={(event) => setnumberTwo(event.target.value)}
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

export default GreaterThenComponent;