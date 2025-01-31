import './App.css';
import Header from "./components/Header/Hader";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profil from "./components/Profile/Profil.jsx";
import {BrowserRouter, Route} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav/>
                <div className="app_wrapper-content">
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profil' component={Profil}/>
                </div>
            </div>
        </ BrowserRouter>
    );
}
export default App;



