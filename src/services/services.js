const sayHelloApi = async (names) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/SayHello/Greeting/${names}`)
    const data = await promise.text();
    return data
}

const addNumbersApi = async (num1, num2) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/AddNumbers/Adding/${num1}/${num2}`)
    const data = await promise.text();
    return data
}

const askQuestionsApi = async (yourName, timeYouWokeUp) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/AskTwoQuestions/AddTwoInputs/${yourName}/${timeYouWokeUp}`)
    const data = await promise.text();
    return data
}

const oddOrEvenApi = async (enterNumber) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/OddOrEven/oddOrEven/${enterNumber}`)
    const data = await promise.text();
    return data
}

const greaterOrLessApi = async (numberOne, numberTwo) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLessThan/${numberOne}/${numberTwo}`)
    const data = await promise.text();
    return data
}

const MadLibApi = async (enterName, enterNumberOne, enterNameTwo, enterNumberTwo, city, animal, hobby, job, car, carTwo, yesOrNo) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/MadLib/Madlibs/${enterName}/${enterNumberOne}/${enterNameTwo}/${enterNumberTwo}/${city}/${animal}/${hobby}/${job}/${car}/${carTwo}/${yesOrNo}`)
    const data = await promise.text();
    return data
}

const reverseNumberApi = async (inputNumber) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/ReverseIt/reverseNumber/${inputNumber}`)
    const data = await promise.text();
    return data
}

const reverseStringApi = async (password) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/ReverseIt/reverseString/${password}`)
    const data = await promise.text();
    return data
}

const magicEightApi = async (yesOrNoQuestion) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/Magic8Ball/MagicEightBall/${yesOrNoQuestion}`)
    const data = await promise.text();
    return data
}

const restaurantPickerApi = async (restarauntCategory) => {
    const promise = await fetch(`https://spacekballforoneapi-ecevf6h7b0c2bfhq.westus-01.azurewebsites.net/RestarauntPicker/RestarauntPicker/${restarauntCategory}`)
    const data = await promise.text();
    return data
}

export { sayHelloApi, addNumbersApi, askQuestionsApi, oddOrEvenApi, greaterOrLessApi, MadLibApi, reverseNumberApi, reverseStringApi, magicEightApi, restaurantPickerApi}