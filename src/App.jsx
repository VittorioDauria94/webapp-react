import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL).then((resp) => {
      console.log(resp);
    });
  }, []);

  return <></>;
}

export default App;
