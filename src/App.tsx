import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { calcNumOfWords } from "./lib";

const App: React.FC = () => {
  // TODO: Refactor ♻️ into a state machine (or use xstate)
  const [running, setRunning] = useState<boolean>(false);
  const [textareaTxt, setTextareaTxt] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState<number>(3);

  // use 'side' effects - an external timer
  // run on render
  useEffect(() => {
    if (running) {
      const timeoutId = setTimeout(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      if (timeRemaining === 0) {
        setRunning(false);
        clearTimeout(timeoutId);
        console.log(calcNumOfWords(textareaTxt));
      }
    }
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
          How fast do you type?
        </h1>
        <textarea
          className="bg-gray-400 h-80 w-4/12"
          onChange={(e) => setTextareaTxt(e.target.value)}
        />
        <div className="flex flex-col items-center text-computer-green">
          <p className="my-6">
            Time Remaining: <span>{timeRemaining}</span>
          </p>
          <button
            className="bg-computer-green px-6 py-3 text-black uppercase disabled:opacity-50"
            onClick={() => {
              setRunning((prev) => !prev);
            }}
            disabled={running}
          >
            Start!
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
