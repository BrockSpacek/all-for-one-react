import React, { useState } from 'react'
import { sayHelloApi } from '../services/services'

const SayHelloComponent = () => {
    const [userInput, setUserInput] = useState('')
    const [display, setDisplay] = useState('')

    const displayText = () => {
        setDisplay(userInput)
    }

  return (
    <div className='bg-[url(src/assets/Home_Page.jpg)] h-screen bg-no-repeat bg-center grid grid-cols-8 grid-rows-8'>
        
        <Button onClick={displayText}> Display Text </Button>
        {
            display.length == 0 && <div className=''> What is your name young Hero?</div>
        }

        <div className=''>{display}</div>

        <input type='text' onChange={(event) => setUserInput(event.target.value)}/>
      
            <div className="mt-36 lg:mr-[20%] flex lg:justify-end justify-center">
            <Link to='/about' className="grid grid-cols-1 grid-rows-1 place-items-center">
                <img className="h-auto max-w-xs ms-auto hover:opacity-70 col-start-6 row-start-5" src={HomeImage} alt="Splash button" />
                <h2 className="text-4xl text-white col-start-6 row-start-5 text-center place-items-center">About</h2>
            </Link>
            </div>
    </div>

    
  )
}

export default SayHelloComponent