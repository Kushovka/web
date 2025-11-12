import { useState } from "react";
import HomePage from "./pages/HomePage";
import HeroPage from "./pages/HeroPage";

const App = () => {
  const [openSystem, setOpenSystem] = useState(false);
  return (
    <main>
      {openSystem ? <HeroPage /> : <HomePage setOpenSystem={setOpenSystem} />}
    </main>
  );
};

export default App;
