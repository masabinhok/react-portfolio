import Home from "./pages/home/Home";
import Loading from "./components/loading/Loading";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <>{loading ? <Loading /> : <Home />}</>;
}

export default App;
