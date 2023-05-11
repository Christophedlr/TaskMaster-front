import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import './App.css';
import Header from "./components/Header";

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" Component={Home} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
