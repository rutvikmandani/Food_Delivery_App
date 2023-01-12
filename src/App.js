import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Home from "./home"
import './App.scss';
import AddToFavoirte from "./Components/addToFavorite";
import Setting from "./Components/Setting";
import { useAuth } from "./Store_Redux/Firebase/FirebaseConfi";
import CheckOutPage from "./Components/CheckOutPage";

const App = () => {
    const currentUser = useAuth();
    const auth = currentUser?.email;
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={auth ? <Cart /> : <Navigate to="/" />} />
                <Route path="/checkout" element={auth ? <CheckOutPage /> : <Navigate to="/" />} />
                <Route path="/setting" element={auth ? <Setting /> : <Navigate to="/" />} />
                <Route path="/addtofavoirte" element={auth ? <AddToFavoirte /> : <Navigate to="/" />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;