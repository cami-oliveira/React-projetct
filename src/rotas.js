import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login" component={<Login />} />
                <Route path="/cadastro" component={<SignUp />} />
                <Route path="/" component={<Home />} />
                <Route exact={true} path="*" component={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;