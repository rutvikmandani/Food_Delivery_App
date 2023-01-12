import {
    AccountBalanceWalletRounded,
    Favorite,
    Home,
    Settings,
    SummarizeRounded
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuContainer from "./MenuContainer";
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Footer = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");
        function setMenuActive() {
            menuLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
    }, [])

    return (
        <>
            {/* Nav Menu */}
            {/* <div className='menu'> */}
            <div className='leftMenu'>
                <ul className='navbar' id='menu'>
                    <MenuContainer icon={<Home onClick={() => navigate("/")} />} isHome />
                    <MenuContainer icon={<LocalMallIcon onClick={() => navigate("/cart")} />} />
                    <MenuContainer icon={<AccountBalanceWalletRounded onClick={() => navigate("/checkout")} />} />
                    <MenuContainer icon={<Favorite onClick={() => navigate("/addtofavoirte")} />} />
                    <MenuContainer icon={<SummarizeRounded onClick={() => navigate("/")} />} />
                    <MenuContainer icon={<Settings onClick={() => navigate("/setting")} />} />
                    <div className='indicator'></div>
                </ul>
            </div>
        </>
    )
}

export default Footer