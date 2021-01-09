import { Helmet } from "react-helmet";

const App: React.FC = () => (
  <>
    <Helmet>
      <html lang="en-us" />
      <title>How Fast Do You Type?</title>
      <meta name="description" content="A very simple typing speed test" />
      <meta name="theme-color" content="#00b800" />
    </Helmet>

    <h1>How fast do you type?</h1>
    <textarea />
    <p>
      Time Remaining: <span>10</span>
      <button>Start!</button>
    </p>
  </>
);

export default App;
