import './App.css';
import {Header} from "./components/Header/Hader.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {Nav} from "./components/Navbar/Nav.jsx";
import {Profile} from "./components/Profile/Profil.jsx";
import {Dialogs} from "./components/Dialogs/Dialogs.jsx";


export const App = (props) => {
    console.log(props);
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav sideFriends={props.state.sidebar}/>
                <div className="app_wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogPage}
                                                                  messages={props.state.dialogPage}/>}/>
                    <Route path='/profil' render={() => <Profile posts={props.state.profilePage}/>}/>


                </div>
            </div>
        </ BrowserRouter>
    );
}



