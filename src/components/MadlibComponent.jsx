import React, { useState } from "react";
import HomeImage from "../assets/Splash_bubble.png";
import { Link } from "react-router-dom";
import { MadLibApi } from "../services/services";

const MadlibComponent = () => {
  const [nameOne, setNameOne] = useState("");
  const [numberOne, setNumberOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [city, setCity] = useState("");
  const [animal, setAnimal] = useState("");
  const [hobby, setHobby] = useState("");
  const [job, setJob] = useState("");
  const [carOne, setCarOne] = useState("");
  const [carTwo, setCarTwo] = useState("");
  const [yesNo, setYesNo] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [story, setStory] = useState("");
  const [greeting, setGreeting] = useState("Let's make a mighty story Hero?");

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await MadLibApi(
          nameOne,
          numberOne,
          nameTwo,
          numberTwo,
          city,
          animal,
          hobby,
          job,
          carOne,
          carTwo,
          yesNo
        );
        setNameOne("");
        setNumberOne("");
        setNameTwo("");
        setNumberTwo("");
        setCity("");
        setAnimal("");
        setHobby("");
        setJob("");
        setCarOne("");
        setCarTwo("");
        setYesNo("");
        setShowStory(true);
        setStory(response);
      } catch (error) {
        console.error("Error fetching greeting:", error);
      }
    }
  };
  return (
    <div className="min-h-screen bg-[url(/src/assets/Game6Background.jpg)] bg-cover bg-fixed bg-no-repeat bg-center flex flex-col">
      <div className="flex-grow flex flex-col items-center">
        <div className="flex justify-center md:w-[50%] w-[80%]">
          <div className="bg-[#B60A0D] text-3xl place-content-center max-[460px]:h-20 sm:h-[80px] w-full text-center rounded-2xl mt-[20px] text-white">
            {greeting}
          </div>
        </div>

        
        {!showStory ? (
          <div className="grid grid-cols-10 lg:grid-rows-3 md:grid-rows-4 grid-rows-6 gap-3 mt-[50px]">
            
            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10 rounded-[7px] col-start-2 md:col-end-4 col-span-4  row-start-1"
              placeholder="Name"
              type="text"
              value={nameOne}
              onChange={(event) => setNameOne(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-4  md:col-span-2 col-span-4  row-start-1"
              placeholder="Number"
              type="text"
              value={numberOne}
              onChange={(event) => setNumberOne(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-6 col-start-2  md:col-span-2 col-span-4  md:row-start-1 row-start-2"
              placeholder="Name"
              type="text"
              value={nameTwo}
              onChange={(event) => setNameTwo(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-8  md:col-span-2 col-span-4  md:row-start-1 row-start-2"
              placeholder="Number"
              type="text"
              value={numberTwo}
              onChange={(event) => setNumberTwo(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] col-start-2  md:col-end-4 col-span-4  md:row-start-2 row-start-3"
              placeholder="City"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-4  md:col-span-2 col-span-4  md:row-start-2 row-start-3"
              placeholder="Animal"
              type="text"
              value={animal}
              onChange={(event) => setAnimal(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-6 col-start-2 md:col-span-2 col-span-4 md:row-start-2 row-start-4"
              placeholder="Hobby"
              type="text"
              value={hobby}
              onChange={(event) => setHobby(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-8  md:col-span-2 col-span-4 md:row-start-2 row-start-4"
              placeholder="Job"
              type="text"
              value={job}
              onChange={(event) => setJob(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] col-start-2  md:col-end-4 col-span-4 md:row-start-3 row-start-5"
              placeholder="Car"
              type="text"
              value={carOne}
              onChange={(event) => setCarOne(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-4  md:col-span-2 col-span-4  md:row-start-3 row-start-5"
              placeholder="Car"
              type="text"
              value={carTwo}
              onChange={(event) => setCarTwo(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <input
              className="mt-[50px] bg-[#B60A0D] text-white placeholder:text-white text-2xl h-10  rounded-[7px] md:col-start-6 col-start-4  md:col-span-2 col-span-4  md:row-start-3 row-start-6"
              placeholder="Yes/No"
              type="text"
              value={yesNo}
              onChange={(event) => setYesNo(event.target.value)}
              onKeyDown={handleKeyDown}
            />
           
          </div>
          
        ) : (
          <div className="grid grid-cols-10 grid-rows-1 gap-3 mt-[50px]">
            <div className="col-start-2 col-span-8 bg-[#B60A0D] text-white text-2xl p-6 rounded-[7px] min-h-[280px] flex items-center justify-center">
              {story}
            </div>
          </div>
        )}
      </div>

      <div className="w-full lg:mr-[2%] flex lg:justify-end justify-center mt-8 mb-8">
          <Link to="/" className="grid grid-cols-1 grid-rows-1 place-items-center">
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

export default MadlibComponent;
