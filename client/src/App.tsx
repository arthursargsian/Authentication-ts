import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Auth from "./pages/auth/Auth";
import NotFound from "./pages/common/NotFound";
import UserContent from "./pages/common/UserContent";
import OnPrivateRoute from "./private/OnPrivateRoute";
import OnPublicRoute from "./private/OnPublicRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OnPublicRoute><Auth/></OnPublicRoute>}/>
                <Route path="/content" element={<OnPrivateRoute><UserContent/></OnPrivateRoute>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/*" element={<Navigate to="/not-found"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
