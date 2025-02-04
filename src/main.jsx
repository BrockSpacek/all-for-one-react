import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHelloComponent from './components/SayHelloComponent.jsx'
import AddTwoNumbersComponent from './components/AddTwoNumbersComponent.jsx'
import AskingQuestionsComponent from './components/AskingQuestionsComponent.jsx'
import GreaterThenComponent from './components/GreaterThenComponent.jsx'
import MadlibComponent from './components/MadlibComponent.jsx'
import ReverseStringComponent from './components/ReverseStringComponent.jsx'
import ReverseNumberComponent from './components/ReverseNumberComponent.jsx'
import Magic8BallComponent from './components/Magic8BallComponent.jsx'
import OddOrEvenComponent from './components/OddOrEvenComponent.jsx'
import RestaurantPickerComponent from './components/RestaurantPickerComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/hello' element={<SayHelloComponent />}/>
          <Route path='/addNumber' element={<AddTwoNumbersComponent />} />
          <Route path='/askQuestion' element={<AskingQuestionsComponent />} />
          <Route path='/greaterorless' element={<GreaterThenComponent />} />
          <Route path='/madlib' element={<MadlibComponent />} />
          <Route path='/reverseString' element={<ReverseStringComponent />} />
          <Route path='/reverseNumber' element={<ReverseNumberComponent />} />
          <Route path='/magic8' element={<Magic8BallComponent />} />
          <Route path='/oddEven' element={<OddOrEvenComponent />} />
          <Route path='/restaurantPicker' element={<RestaurantPickerComponent />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
