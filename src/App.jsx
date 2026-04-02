import { Outlet } from "react-router-dom";
import CorporateFooter from "./components/CorporateFooter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-primary">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CorporateFooter />
    </div>
  );
}

export default App;
