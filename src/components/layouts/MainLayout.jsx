import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto">
                  <Outlet></Outlet>
                </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;