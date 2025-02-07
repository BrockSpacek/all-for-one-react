import { Link } from 'react-router-dom'
import HomeImage from '../assets/Splash_bubble.png'

const AboutScreenComponent = () => {


    return (
        <div className='bg-[url(/src/assets/About_Background.png)] h-screen bg-no-repeat bg-center bg-cover lg:place-items-start place-items-center'>
            <h1 className='underline text-5xl text-white lg:ml-[20%]'> One For All</h1>

            <div className='text-white lg:text-4xl text-2xl mt-16 ml-[2%] lg:place-items-start place-items-center'>
                <h1 className='mt-24  max-w-[60%]'>1. One for all is a collection of 10 mini challenges and games.</h1>
        
                <h1 className='mt-24  max-w-[60%]'>2. Explore them all and see what your favorite heroes are working on.</h1>
            
                <h1 className='mt-24  max-w-[60%]'>3. Who knows... You might even became the number 1 Hero one day</h1>
            </div>

            <div className="mt-10 flex lg:justify-start mx-auto lg:mx-0 w-fit lg:ml-[18%]">
                        <Link to='/' className="grid grid-cols-1 grid-rows-1 place-items-center">
                            <img className="h-auto max-w-xs ms-auto hover:opacity-70 col-start-6 row-start-5" src={HomeImage} alt="Splash button" />
                            <h2 className="text-4xl text-white col-start-6 row-start-5 text-center place-items-center">Main Menu</h2>
                        </Link>
                      </div>
        </div>
    )
}

export default AboutScreenComponent;