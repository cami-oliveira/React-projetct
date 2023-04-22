import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/NotFound" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;