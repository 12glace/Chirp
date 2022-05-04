import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Private from "./components/Private";
import Messages from "./components/Messages";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import List from "./components/List";
import RightSidebar from "./components/RightSidebar";
const App = () => {
    return(
       <div className="app">
            <BrowserRouter>
            <Sidebar/>
                <Routes>  {/* this is the router */}
                    <Route path="/home" exact element={<Home/>}/>
                    <Route path="*" exact element={<Home/>}/>
                    <Route path="/messages" exact element={<Messages/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/private" exact element={<Private/>}/>
                    <Route path="/bookmarks" exact element={<Bookmarks/>}/>
                    <Route path="/notifications" element={<Notifications/>}/>
                    <Route path="/lists" element={<List/>}/>
                </Routes>
                <RightSidebar/>
            </BrowserRouter>
        </div>
    )
}
export default App;