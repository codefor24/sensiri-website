import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
