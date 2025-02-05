import GameOneButton from '../assets/Deku_Button.jpg'
import GameTwoButton from '../assets/Game 2 Button.jpg'
import GameThreeButton from '../assets/Game 3.png'
import GameFourButton from '../assets/Game 4 Button.jpg'
import GameFiveButton from '../assets/Game 5 Button.jpg'
import GameSixButton from '../assets/Game 6 Button.jpg'
import GameSevenButton from '../assets/Game 7 Button.png'
import GameEightButton from '../assets/Game 8 Button.png'
import GameNineButton from '../assets/Game 9 Button.jpg'
import GameTenButton from '../assets/Game 10 Button.jpg'
import HomeImage from '../assets/Splash_bubble.png'

import { Link } from 'react-router-dom'

const PlayScreenComponent = () => {



    return (

        <div className='grid lg:grid-cols-10 lg:grid-rows-5 sm:grid-cols-7 grid-cols-6 grid-rows-7 lg:gap-5 gap-3 bg-[url(src/assets/wp12250335-mha-ua-wallpapers.jpg)] h-screen bg-no-repeat bg-center bg-cover'>
            <div className="mt-[10px] lg:col-start-3 lg:col-span-6 sm:col-start-2 sm:col-span-5 col-start-2 col-span-4 row-start-1">
                <h1 className="bg-yellow-400 sm:text-3xl text-2xl sm:h-[40px] h-[35px] w-full text-center rounded-3xl">Choose A Hero To Aid</h1>
            </div>

            <div className="row-start-2 col-start-2 col-span-2">
                <Link to='/hello' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px] w-full hover:opacity-70" src={GameOneButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="row-start-2 sm:col-start-5 col-start-4 col-span-2 ">
                <Link to='/addNumber' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameTwoButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-2 lg:col-start-8 col-start-2 row-start-3 col-span-2 ">
                <Link to='/askQuestion' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameThreeButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="row-start-3 lg:col-start-2 sm:col-start-5 col-start-4 col-span-2 ">
                <Link to='/oddEven' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameFourButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-3 lg:col-start-5 row-start-4 col-start-2 col-span-2 ">
                <Link to='/greaterorless' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameFiveButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-3 lg:col-start-8 row-start-4 sm:col-start-5 col-start-4 col-span-2 ">
                <Link to='/madlib' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameSixButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-4 col-start-2 row-start-5 col-span-2 ">
                <Link to='/reverseString' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameSevenButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-4 sm:col-start-5 col-start-4 row-start-5 col-span-2 ">
                <Link to='/reverseNumber' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameEightButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-4 lg:col-start-8 row-start-6 col-start-2 col-span-2 ">
                <Link to='/magic8' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameNineButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="lg:row-start-5 sm:col-start-5 col-start-4 row-start-6 col-span-2 ">
                <Link to='/restaurantPicker' className="">
                     <img className="rounded-3xl lg:h-[170px] h-[125px]  w-full hover:opacity-70" src={GameTenButton} alt="Splash button" />
                
                 </Link>
            </div>

            <div className="mx-auto lg:mx-0 w-fit lg:ml-auto lg:mr-[15%] sm:col-start-4 col-start-3 col-span-2 sm:col-span-1 lg:col-start-8 lg:row-start-5 row-start-7">
                        <Link to='/' className="grid grid-cols-1 grid-rows-1 place-items-center">
                            <img className="max-w-xs hover:opacity-70 col-start-6 row-start-5 lg:h-[170px] h-[125px] " src={HomeImage} alt="Splash button" />
                            <h2 className="sm:text-2xl text-white col-start-6 row-start-5 text-center place-items-center">Main Menu</h2>
                        </Link>
                      </div>

            
        </div>
        

        
    )
}

export default PlayScreenComponent;