import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Form from "./Form";
import Info from "./Info";

function TimerForm({ textAreaRef }) {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [wpm, setWpm] = useState(null);

  useEffect(() => {
    if (timeRemaining) {
      const intervalId = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (!timeRemaining) {
      textAreaRef.current.blur();
      textAreaRef.current.disabled = true;
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    setTimeRemaining(event.target.elements[0].value);

    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  return (
    <>
      <Form handler={handleSubmit} />
      <Info secs={Number(timeRemaining)} wpm={wpm} />
    </>
  );
}

TimerForm.propTypes = {
  textAreaRef: PropTypes.object,
};

TimerForm.defaultProps = {
  textAreaRef: null,
};

export default TimerForm;
