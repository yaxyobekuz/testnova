import { createRoot } from "react-dom/client";

// Styles (CSS)
import "./styles/fonts.css";
import "./styles/index.css";

// Components
import App from "./App.jsx";

// Redux
import store from "./store";
import { Provider } from "react-redux";

// Render the project
const elRoot = document.getElementById("root");
createRoot(elRoot).render(<Provider store={store} children={<App />} />);
