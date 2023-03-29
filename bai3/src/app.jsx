
import Products from "./component/pages/products";
import Products_add from "./component/pages/products_add";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Apptick from "./apptick";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="products_add" element={<Products_add />} />

                <Route path="apptick" element={<Apptick />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;