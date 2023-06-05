import React from "react";
import { Footer, Header } from "./components";
import { Heap, MinCut} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/heap" element={<Heap />} />
                    <Route path="/min-cut" element={<MinCut />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
