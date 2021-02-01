import { calcNumOfWords } from "lib";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const App: React.FC = () => {
  // Persist data w/o re-render
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Must specify 'null' when directly assigning to 'current'
  const timeoutRef = useRef<null | number>(null);

  // TODO: Refactor ♻️ into a state machine (or use xstate)
  const [running, setRunning] = useState<boolean>(false);
  const [textareaTxt, setTextareaTxt] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState<number>(3);
  const [wordCount, setWordCount] = useState<number | string>("N/A");

  function init() {
    setRunning((prev) => !prev);
    setTimeRemaining(3);
    setTextareaTxt("");
    if (textareaRef.current) {
      textareaRef.current.disabled = false;
      textareaRef.current.focus();
    }
    setWordCount("N/A");
  }

  // use 'side' effects - an external timer
  // run on render
  useEffect(() => {
    if (timeRemaining && running) {
      timeoutRef.current = window.setTimeout(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (!timeRemaining) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      setRunning(false);
      setWordCount(calcNumOfWords(textareaTxt));
    }
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [running, timeRemaining, textareaTxt]);

  return (
    <>
      <Helmet>
        <html lang="en-us" />
        <title>How Fast Do You Type?</title>
        <meta name="description" content="A very simple typing speed test" />
        <meta name="theme-color" content="#00b800" />
      </Helmet>

      <main className="flex flex-col items-center">
        <h1 className="my-6 text-2xl text-computer-green">
          How Fast Do You Type?
        </h1>
        <textarea
          className="bg-gray-400 h-80 w-4/12 placeholder-white disabled:opacity-50"
          onChange={(e) => setTextareaTxt(e.target.value)}
          disabled={!running}
          placeholder={running ? "" : "Press 'Start!'👇🏾 and start typing ⌨️ 🔥"}
          ref={textareaRef}
          value={textareaTxt}
        />
        <div className="flex flex-col items-center text-computer-green">
          <p className="my-6">
            Time Remaining: <span>{timeRemaining}</span>
          </p>
          <button
            className="bg-computer-green px-6 py-3 text-black uppercase disabled:opacity-50"
            onClick={init}
            disabled={running}
          >
            Start!
          </button>
        </div>

        <p className="my-6 text-computer-green">Word Count:&nbsp;{wordCount}</p>
      </main>
    </>
  );
};

export default App;
