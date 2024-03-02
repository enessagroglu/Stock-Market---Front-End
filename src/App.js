import logo from "./logo.svg";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MenuBar from "./components/MenuBar";
import { Button } from 'primereact/button';

function App() {
  return (
    
    <PrimeReactProvider>
      <>
        <div class="grid flex">
          <div class="col-3">
            <MenuBar />
          </div>

          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    </PrimeReactProvider>
  );
}

export default App;
