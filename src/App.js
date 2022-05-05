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
import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { Button, Input } from "@material-ui/core";
import { auth } from "./Firebase/firebase";
const App = () => {

    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };


    return(
        <div className="connection">
{user? null:

<div>
<div className="display"><h1>~(‾▿‾)~ Chirp</h1></div>
<div className="login">
    

      <div>
        <h3> Login </h3>
        <Input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Password..."
          type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button onClick={login}> Login</Button>
      </div>
      <br />
      <h3>Or</h3>
      <br />
    <div>   
        <h3> Register User </h3>
        <Input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Password..."
          type = "password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <Button onClick={register}> Create User</Button>
      </div>
      </div>
      </div>
}
{user? <Button className="logoff" onClick={logout}> Sign Out </Button>: null}
        <div className="app">
        {user? <BrowserRouter>
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
                </BrowserRouter> : null
                }
                
            </div>
        </div>
    )
}
export default App;