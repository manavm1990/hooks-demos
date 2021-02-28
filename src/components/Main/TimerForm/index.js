import { useEffect, useState } from "react";
import Form from "./Form";
import Info from "./Info";

function TimerForm() {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [wpm, setWpm] = useState(null);

  useEffect(() => {
    if (timeRemaining) {
      const intervalId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeRemaining]);

  function handleSubmit(event) {
    event.preventDefault();
    setTimeRemaining(event.target.elements[0].value);
  }

  return (
    <>
      <Form handler={handleSubmit} />
      <Info secs={Number(timeRemaining)} wpm={wpm} />
    </>
  );
}

export default TimerForm;
