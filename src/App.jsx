import HomeImage from './assets/Splash_bubble.png'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    
      <div className='bg-[url(src/assets/Home_Page.jpg)] h-screen bg-no-repeat bg-cover bg-center grid-cols-8 grid-rows-8' >

        
          <h1 className="text-red-600 text-6xl lg:mr-[21%] flex lg:justify-end justify-center">One For All</h1>

          <div className="mt-48 lg:mr-[20%] flex lg:justify-end justify-center">
            <Link to='/play' className="grid grid-cols-1 grid-rows-1 place-items-center">
                <img className="h-auto max-w-xs ms-auto hover:opacity-70 col-start-6 row-start-3" src={HomeImage} alt="Splash button" />
                <h2 className="text-4xl text-white col-start-6 row-start-3 text-center place-items-center">Play</h2>
            </Link>
          </div>

          <div className="mt-16 lg:mr-[20%] flex lg:justify-end justify-center">
            <Link to='/about' className="grid grid-cols-1 grid-rows-1 place-items-center">
                <img className="h-auto max-w-xs ms-auto hover:opacity-70 col-start-6 row-start-5" src={HomeImage} alt="Splash button" />
                <h2 className="text-4xl text-white col-start-6 row-start-5 text-center place-items-center">About</h2>
            </Link>
          </div>
      </div>
  
  )
}

export default App
