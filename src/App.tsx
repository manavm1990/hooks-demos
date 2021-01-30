import { useState } from "react";
import { Helmet } from "react-helmet-async";

const App: React.FC = () => {
  const [textareaTxt, setTextareaTxt] = useState<string>("");

  console.log(textareaTxt);
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
          // TODO: Add `value={textAreaTxt}`
        />
        <div className="flex flex-col items-center text-computer-green">
          <p className="my-6">
            Time Remaining: <span>10</span>
          </p>
          <button className="bg-computer-green px-6 py-3 text-black uppercase">
            Start!
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
