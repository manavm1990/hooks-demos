import { useState } from "react";
import Form from "./Form";
import Remaining from "./Remaining";

function TimerForm() {
  const [timeRemaining, setTimeRemaining] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setTimeRemaining(event.target.elements[0].value);
  }

  return (
    <>
      <Form handler={handleSubmit} />
      {timeRemaining ? <Remaining secs={timeRemaining} /> : ""}
    </>
  );
}

export default TimerForm;
