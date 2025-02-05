import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { addNumbersApi } from "../services/services";


const AddTwoNumbersComponent = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("Let's add numbers... or explosions");
  
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        try {
          
          if (num1 && num2) {
            const response = await addNumbersApi(num1, num2);
            setResult(response);
            
            setNum1("");
            setNum2("");
          }
        } catch (error) {
          console.error("Error adding numbers:", error);
        }
      }
    };
  
    return (
      <div className="bg-[url(src/assets/Game2Background.jpg)] h-screen bg-cover bg-no-repeat bg-center">
        <div className="place-items-center">
          <div className="flex justify-center md:w-[50%] w-[80%]">
            <div className="bg-[#35BED7] text-3xl place-content-center sm:h-[80px] h-[110px] w-full text-center rounded-2xl mt-[20px] text-white">
              {result}
            </div>
          </div>
  
          <div className="flex justify-center gap-4">
            <input 
              className="mt-[500px] text-2xl h-10 w-[40%] sm:w-52 lg:w-64 rounded-[7px] bg-[#35BED7] text-white placeholder-white"
              placeholder="Enter Num"
              type="text"
              value={num1}
              onChange={(event) => setNum1(event.target.value)}
              onKeyDown={handleKeyDown}
            />
  
            <input 
              className="mt-[500px] text-2xl h-10 w-[40%] sm:w-52 lg:w-64 rounded-[7px] bg-[#35BED7] text-white placeholder-white"
              placeholder="Enter Num 2"
              type="text"
              value={num2}
              onChange={(event) => setNum2(event.target.value)}
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


   

export default AddTwoNumbersComponent;