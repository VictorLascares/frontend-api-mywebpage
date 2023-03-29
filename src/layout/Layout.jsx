import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Layout = () => {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr_auto]">
            <Header /> 

            <main className="min-h-min">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};