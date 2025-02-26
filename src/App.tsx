import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const test = import.meta.env.VITE_TEST;
  return (
    <>
      <CssBaseline />
      <p>Env test value is: {test}</p>
    </>
  );
}

export default App;
