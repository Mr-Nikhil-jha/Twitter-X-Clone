import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/index";
import RightAsidePage from "./components/pages/RightAsidePage";
function App() {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-5">
                <Navbar />
            </div>
            <div className="col-span-3 row-span-5">
                <Outlet />
            </div>
            <div className="row-span-5 col-start-5">
                <RightAsidePage />
            </div>
        </div>
    );
}

export default App;
