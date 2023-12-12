import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);

  // This state define whether we want to show the application
  const [isOpen, setIsOpen] = useState(true);

  // here this handle part here in the event handler function is pretty standard in react development.
  const handleClose = () => {
    setIsOpen((currstate) => !currstate);
  }

  const handlePrevious = () => {
    if(step > 1) {
      setStep((curStep) => curStep - 1);
    }
  }

  const handleNext = () => {
    if(step < 3) {
      setStep((curStep) => curStep + 1);
    }
  }

  return (
    <>
      {/* Here &times will give a cross symbol */}
      <button className="close" onClick={handleClose}>&times;</button>

      {/* Here, we had used the JS mode for a conditional rendering with short circuiting of and operator with isOpen state */}
      { isOpen &&
        <div className="steps">

          <div className="numbers">

            <div className={`${step === 1 ? 'active' : ""}`}>1</div>
            <div className={`${step === 2 ? 'active' : ""}`}>2</div>
            <div className={`${step === 3 ? 'active' : ""}`}>3</div>

          </div>

          <p className="message">Step {step}: {messages[step - 1]}</p>

          <div className="buttons">

            {/* Here, we had used the listener, Also we can use multiple listener on a single element as well */}
            <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handlePrevious}>
              Previous
            </button>

            <button style={{backgroundColor: '#7950f2', color: '#fff'}} onClick={handleNext}>
              Next
            </button>

          </div>

        </div>
      } 
    </>
  );
}

export default App;
