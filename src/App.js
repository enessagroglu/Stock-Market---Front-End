import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <PrimeReactProvider>
      <div style={{}}>
        <>
          <div class="banner">
            <Banner />
          </div>
          <div class="">
            
            <div class="page">
              <BrowserRouter>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
