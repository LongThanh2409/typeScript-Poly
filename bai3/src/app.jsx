
import Products from "./component/pages/products";
import Products_add from "./component/pages/products_add";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Apptick from "./apptick";
import Products_edit from "./component/pages/products_edit";
import Login from "./component/Login/login";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="products_add" element={<Products_add />} />
                <Route path="apptick" element={<Apptick />} />
                <Route path="products_edit/:id" element={<Products_edit />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;