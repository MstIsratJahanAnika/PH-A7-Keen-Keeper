import { Outlet } from "react-router";
import Navbar from "../../components/navBar/Navbar";
import Footer from "../../components/footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>

            {/* dynamic content */}
            <main className="bg-[#F8FAFC]">
                <Outlet></Outlet>
            </main>


            {/*react toastify */}
            <ToastContainer />

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;