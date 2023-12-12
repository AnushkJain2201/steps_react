import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

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
      <button className="close" onClick={handleClose}>&times;</button>


      { isOpen &&
        <div className="steps">

          <div className="numbers">

            <div className={`${step === 1 ? 'active' : ""}`}>1</div>
            <div className={`${step === 2 ? 'active' : ""}`}>2</div>
            <div className={`${step === 3 ? 'active' : ""}`}>3</div>

          </div>

            <StepMessage step={step} >
                {messages[step - 1]}
            </StepMessage>

          <div className="buttons">

            {/* Here as you can observe that we have created a closing tag for our component and write CHILD PROP inside it */}
            <Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious}>
                <span>👈</span>Previous 
            </Button>

            <Button textColor='#fff' bgColor='#7950f2' onClick={handleNext}>
                Next<span>👉</span>
            </Button>
          </div>

        </div>
      } 
    </>
  );
}

export default App;

// Here, we are passing children here which is a predefined keyword that is used to access the CHILD PROP
const Button = ({textColor, bgColor, onClick, text, emoji, children}) => {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}> {children} </button>
    );
}

const StepMessage = ({step, children}) => {
    return (
        <p className="message">
            <h3>Step {step}:</h3>
            {children}
        </p>
    );
}
