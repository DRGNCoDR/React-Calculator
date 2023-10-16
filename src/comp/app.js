import React from "react";

function App(){
  return (
    <div>
        <h2 className="textCenter">React Calculator</h2>
        <div
            className="calc-container"
        >        
            <div
                className="calcBtnRow"
            >
                <input className=""/>
                <button className="calcBtn">
                    Back
                </button>
            </div>        
            <div className="calcBtnRow">
                <button className="calcBtn">
                    C    
                </button>
                <button className="calcBtn">
                    C/E
                </button>
                <button className="calcBtn">
                    %
                </button>                
            </div>
            <div className="calcBtnRow">
                <button className="calcBtn">
                    7    
                </button>
                <button className="calcBtn">
                    8
                </button>
                <button className="calcBtn">
                    9
                </button>
                <button className="calcBtn">
                    /
                </button>
            </div>
            <div className="calcBtnRow">
                <button className="calcBtn">
                    4    
                </button>
                <button className="calcBtn">
                    5
                </button>
                <button className="calcBtn">
                    6
                </button>
                <button className="calcBtn">
                    *
                </button>
            </div>
            <div className="calcBtnRow">
                <button className="calcBtn">
                    1    
                </button>
                <button className="calcBtn">
                    2
                </button>
                <button className="calcBtn">
                    3
                </button>
                <button className="calcBtn">
                    +
                </button>
            </div>
            <div className="calcBtnRow">
                <button className="calcBtn">
                    ( - )    
                </button>
                <button className="calcBtn">
                    0
                </button>
                <button className="calcBtn">
                    .
                </button>
                <button className="calcBtn">
                    =
                </button>   
            </div>
      </div>
    </div>
  );
}

export default App;