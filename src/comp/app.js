import React from "react";

function App()
{
    let firstNum = 0,
    secondNum = 0,
    operator = ""

    const handleBackButton = () => {
        let inputVal = document.querySelector(".calc-input").value
        
        if(inputVal != "")
        {
            document.querySelector(".calc-input").value = inputVal.slice(0,-1)
        }
    }

    const handleClearButton = () => {
        document.querySelector(".calc-input").value = ""
    }

    const handlePercentButton = () => {
        let inputVal = document.querySelector(".calc-input").value
        if (inputVal != "")
        {
            document.querySelector(".calc-input").value = (inputVal / 100)
        }
    }

    let addToInput = (key) =>
    {
        let inputVal = document.querySelector(".calc-input").value
            
        if (key != "") 
        {
            switch (key) 
            {
                case '0': 
                    document.querySelector(".calc-input").value = 
                    inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '1': 
                    document.querySelector(".calc-input").value = inputVal + key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '2': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '3': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '4': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '5': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '6': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '7': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '8': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '9': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '.': 
                    document.querySelector(".calc-input").value = inputVal+ key.toString()
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '(-)':
                    document.querySelector(".calc-input").value = "-" + inputVal
                    inputVal = document.querySelector(".calc-input").value
                break;

                case '+': 
                    firstNum = inputVal
                    operator = "+"
                    handleClearButton()
                break;

                case '-': firstNum = inputVal
                    operator = "-"
                    handleClearButton()
                break;

                case '*': firstNum = inputVal
                    operator = "*"
                    handleClearButton()
                break;

                case '/': firstNum = inputVal
                    operator = "/"
                    handleClearButton()
                break;

                case '=':
                    secondNum = document.querySelector(".calc-input").value
                    
                    if(operator == "+")
                    {
                        inputVal = (parseInt(firstNum) + parseInt(secondNum))
                        document.querySelector(".calc-input").value = inputVal
                        console.log(inputVal)
                    }

                    if(operator == "-")
                    {
                        inputVal = (parseInt(firstNum) - parseInt(secondNum))
                        document.querySelector(".calc-input").value = inputVal
                    }

                    if(operator == "/")
                    {
                        inputVal = (parseInt(firstNum) / parseInt(secondNum))
                        document.querySelector(".calc-input").value = inputVal
                    }

                    if(operator == "*")
                    {
                        inputVal = (parseInt(firstNum) * parseInt(secondNum))
                        document.querySelector(".calc-input").value = inputVal
                    }
                break;
            }
        }
    }
    return (
        <div>
            <h2 className="textCenter">React Calculator</h2>
            
            <div
                className="calc-container"
            >        
                <div
                    className="calcBtnRow"
                >
                    <input className="calc-input"/>
                    <button className="calcBtn"  onClick={handleBackButton}>
                        Back
                    </button>
                </div>  

                <div className="calcBtnRow">
                    <button className="calcBtn"  onClick={handleClearButton}>
                        C    
                    </button>
                    <button className="calcBtn"  >
                        C/E
                    </button>
                    <button className="calcBtn"  onClick={handlePercentButton}>
                        %
                    </button>  
                    <button className="calcBtn" onClick={() => addToInput("-")}>
                        -
                    </button>              
                </div>

                <div className="calcBtnRow">
                    <button className="calcBtn" onClick={() => addToInput("7")}>
                        7    
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("8")} >
                        8
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("9")}>
                        9
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("/")}>
                        /
                    </button>
                </div>

                <div className="calcBtnRow">
                    <button className="calcBtn" onClick={() => addToInput("4")}>
                        4    
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("5")}>
                        5
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("6")}>
                        6
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("*")}>
                        *
                    </button>
                </div>

                <div className="calcBtnRow">
                    <button className="calcBtn" onClick={() => addToInput("1")}>
                        1    
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("2")}>
                        2
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("3")}>
                        3
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("+")}>
                        +
                    </button>
                </div>

                <div className="calcBtnRow">
                    <button className="calcBtn" onClick={() => addToInput("(-)")}>
                        ( - )    
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("0")}>
                        0
                    </button>
                    <button className="calcBtn" onClick={() => addToInput(".")}>
                        .
                    </button>
                    <button className="calcBtn" onClick={() => addToInput("=")}>
                        =
                    </button>   
                </div>
            </div>
        </div>
    );
}

export default App;